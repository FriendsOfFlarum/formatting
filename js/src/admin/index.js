import app from 'flarum/admin/app';
import FormattingExtensionSettingsPage from './components/FormattingExtensionSettingsPage';

app.initializers.add('fof/formatting', () => {
  app.extensionData.for('fof-formatting').registerPage(FormattingExtensionSettingsPage);
});
