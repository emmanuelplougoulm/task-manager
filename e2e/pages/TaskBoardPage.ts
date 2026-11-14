import { expect, type Locator, type Page } from '@playwright/test';

export type TaskInput = { title: string; description?: string; dueDate?: string };
export type Status = 'To do' | 'In progress' | 'Done';

export class TaskBoardPage {
  readonly page: Page;
  readonly newTaskButton: Locator;
  readonly panel: Locator;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly dueDateInput: Locator;
  readonly statusSelect: Locator;
  readonly table: Locator;
  readonly search: Locator;
  readonly statusFilter: Locator;
  readonly sortSelect: Locator;
  readonly toast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTaskButton = page.getByRole('button', { name: 'New task' });
    this.panel = page.getByRole('complementary', { name: 'Task details' });
    this.titleInput = this.panel.getByLabel('Title');
    this.descriptionInput = this.panel.getByLabel('Description');
    this.dueDateInput = this.panel.getByLabel('Due date');
    this.statusSelect = this.panel.getByLabel('Status');
    this.table = page.getByRole('table', { name: 'Tasks' });
    this.search = page.getByRole('searchbox', { name: 'Search tasks' });
    this.statusFilter = page.getByRole('search', { name: 'Filter tasks' }).getByLabel('Status');
    this.sortSelect = page.getByRole('search', { name: 'Filter tasks' }).getByLabel('Sort');
    this.toast = page.locator('.toast-container');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page.getByRole('heading', { name: 'Task Manager' })).toBeVisible();
  }

  async fillForm(task: TaskInput) {
    await this.titleInput.fill(task.title);
    if (task.description !== undefined) await this.descriptionInput.fill(task.description);
    if (task.dueDate !== undefined) await this.dueDateInput.fill(task.dueDate);
  }

  async createTask(task: TaskInput) {
    await this.newTaskButton.click();
    await this.fillForm(task);
    await this.panel.getByRole('button', { name: 'Create task' }).click();
    await expect(this.panel).toBeHidden();
  }

  row(title: string): Locator {
    return this.table.getByRole('row').filter({ has: this.page.getByRole('cell', { name: title, exact: true }) });
  }

  async titlesInTable(): Promise<string[]> {
    return this.table.locator('tbody tr td:first-child').allInnerTexts();
  }

  async openEdit(title: string) {
    await this.page.getByRole('button', { name: `Edit ${title}`, exact: true }).first().click();
    await expect(this.panel.getByRole('heading', { name: 'Edit task' })).toBeVisible();
  }

  async deleteFromList(title: string, { confirm }: { confirm: boolean }) {
    this.page.once('dialog', (dialog) => (confirm ? dialog.accept() : dialog.dismiss()));
    await this.page.getByRole('button', { name: `Delete ${title}`, exact: true }).first().click();
  }

  async switchTo(view: 'Table' | 'Board') {
    const button = this.page.getByRole('group', { name: 'View' }).getByRole('button', { name: view });
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
  }

  column(status: Status): Locator {
    return this.page.getByRole('region', { name: status, exact: true });
  }

  card(title: string): Locator {
    return this.page.getByRole('article', { name: title, exact: true });
  }
}
