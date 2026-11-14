import { expect, test } from './fixtures';

test.describe('tasks', () => {
  test.beforeEach(async ({ board }) => {
    await board.goto();
  });

  test('shows an empty state on first visit', async ({ page, board }) => {
    await expect(page.getByText('No task yet')).toBeVisible();
    await expect(board.table).toBeHidden();
    await expect(page.getByTestId('stat-tasks')).toHaveText('0');
  });

  test('creates a task and lists it in the table', async ({ page, board }) => {
    await board.createTask({ title: 'Write the test plan', description: 'Cover the happy paths', dueDate: '2030-01-15' });

    const row = board.row('Write the test plan');
    await expect(row).toBeVisible();
    await expect(row).toContainText('Cover the happy paths');
    await expect(row).toContainText('To do');
    await expect(row).toContainText('15 Jan 2030');
    await expect(board.toast).toContainText('Task created');
    await expect(page.getByTestId('stat-tasks')).toHaveText('1');
    await expect(page.getByTestId('stat-done')).toHaveText('0 / 1');
  });

  test('requires a title', async ({ board }) => {
    await board.newTaskButton.click();
    await board.descriptionInput.fill('No title here');
    await board.panel.getByRole('button', { name: 'Create task' }).click();

    await expect(board.panel.getByText('Title is required')).toBeVisible();
    await expect(board.titleInput).toHaveAttribute('aria-invalid', 'true');
    await expect(board.panel).toBeVisible();
    await expect(board.table).toBeHidden();
  });

  test('cancelling the form creates nothing', async ({ page, board }) => {
    await board.newTaskButton.click();
    await board.fillForm({ title: 'Never saved' });
    await board.panel.getByRole('button', { name: 'Cancel' }).click();

    await expect(board.panel).toBeHidden();
    await expect(page.getByText('No task yet')).toBeVisible();
  });

  test('edits a task, including its status', async ({ page, board }) => {
    await board.createTask({ title: 'Draft release notes' });
    await board.openEdit('Draft release notes');

    await expect(board.titleInput).toHaveValue('Draft release notes');
    await board.titleInput.fill('Publish release notes');
    await board.statusSelect.selectOption({ label: 'Done' });
    await board.panel.getByRole('button', { name: 'Save changes' }).click();

    await expect(board.panel).toBeHidden();
    await expect(board.row('Draft release notes')).toHaveCount(0);
    await expect(board.row('Publish release notes')).toContainText('Done');
    await expect(page.getByTestId('stat-done')).toHaveText('1 / 1');
  });

  test('deletes a task only after confirmation', async ({ page, board }) => {
    await board.createTask({ title: 'Obsolete task' });

    await board.deleteFromList('Obsolete task', { confirm: false });
    await expect(board.row('Obsolete task')).toBeVisible();

    await board.deleteFromList('Obsolete task', { confirm: true });
    await expect(board.toast).toContainText('Task deleted');
    await expect(page.getByText('No task yet')).toBeVisible();
  });

  test('keeps tasks after a reload', async ({ page, board }) => {
    await board.createTask({ title: 'Survives reload', dueDate: '2030-06-01' });
    await page.reload();

    await expect(board.row('Survives reload')).toBeVisible();
  });
});
