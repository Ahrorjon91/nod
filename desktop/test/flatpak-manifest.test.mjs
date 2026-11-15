import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('the Flatpak manifest lets the sleep blocker reach the power services Chromium calls', async () => {
  const manifest = await readFile(new URL('../flatpak/io.n8n.Nod.yml', import.meta.url), 'utf8');
  const permissions = manifest.split('\n').map((line) => line.trim());
  for (const name of ['org.gnome.SessionManager', 'org.freedesktop.PowerManagement']) {
    assert.ok(permissions.includes(`- --talk-name=${name}`), `${name} is not permitted`);
  }
});
