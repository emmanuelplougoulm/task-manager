import { expect, test } from './fixtures';

test.describe('filters and sorting', () => {
  test.beforeEach(async ({ seed }) => {
    await seed([
      { title: 'Fix login bug', description: 'Safari only', dueDate: '2030-03-10', status: 'inProgress' },
      { title: 'Write e2e tests', description: 'Playwright', dueDate: '2030-01-05', status: 'pending' },
      { title: 'Release v1', dueDate: '2030-02-20', status: 'done' },
      { title: 'Someday idea', status: 'pending' }
    ]);
  });

  test('sorts by due date, undated tasks last', async ({ board }) => {
    expect(await board.titlesInTable()).toEqual(['Write e2e tests', 'Release v1', 'Fix login bug', 'Someday idea']);

    await board.sortSelect.selectOption('desc');
    expect(await board.titlesInTable()).toEqual(['Fix login bug', 'Release v1', 'Write e2e tests', 'Someday idea']);
  });

  test('filters by status', async ({ board }) => {
    await board.statusFilter.selectOption({ label: 'To do' });
    expect(await board.titlesInTable()).toEqual(['Write e2e tests', 'Someday idea']);

    await board.statusFilter.selectOption({ label: 'Done' });
    expect(await board.titlesInTable()).toEqual(['Release v1']);
  });

  test('searches titles and descriptions, case-insensitively', async ({ board }) => {
    await board.search.fill('PLAYWRIGHT');
    expect(await board.titlesInTable()).toEqual(['Write e2e tests']);

    await board.search.fill('release');
    expect(await board.titlesInTable()).toEqual(['Release v1']);
  });

  test('explains when no task matches', async ({ page, board }) => {
    await board.search.fill('nothing like this');

    await expect(page.getByText('No task matches your filters')).toBeVisible();
    await expect(board.table).toBeHidden();
  });
});
