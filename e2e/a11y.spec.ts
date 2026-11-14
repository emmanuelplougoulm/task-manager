import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, test } from './fixtures';

const scan = (page: Page) => new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();

test.describe('accessibility (axe, WCAG 2 A/AA)', () => {
  test('empty board', async ({ page, board }) => {
    await board.goto();
    expect((await scan(page)).violations).toEqual([]);
  });

  test('table, kanban and the edit form', async ({ page, seed, board }) => {
    await seed([
      { title: 'Plan sprint', dueDate: '2030-01-01' },
      { title: 'Deploy', status: 'done' }
    ]);
    expect((await scan(page)).violations).toEqual([]);

    await board.switchTo('Board');
    expect((await scan(page)).violations).toEqual([]);

    await board.openEdit('Plan sprint');
    expect((await scan(page)).violations).toEqual([]);
  });
});
