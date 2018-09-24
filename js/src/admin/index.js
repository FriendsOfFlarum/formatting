import app from 'flarum/app';
import FormattingSettingsModal from './components/FormattingSettingsModal';

app.initializers.add('fof/formatting', () => {
    app.extensionSettings['fof-formatting'] = () => app.modal.show(new FormattingSettingsModal());
});
