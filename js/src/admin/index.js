import app from 'flarum/admin/app';
import FormattingExtensionSettingsPage from './components/FormattingExtensionSettingsPage';

app.initializers.add('fof/formatting', () => {
  app.registry.for('fof-formatting').registerPage(FormattingExtensionSettingsPage);
});
