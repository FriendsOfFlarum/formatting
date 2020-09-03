import { settings } from '@fof-components';
const {
    SettingsModal,
    items: { BooleanItem },
} = settings;

app.initializers.add('fof/formatting', () => {
    app.extensionSettings['fof-formatting'] = () =>
        app.modal.show(SettingsModal, {
            title: app.translator.trans('fof-formatting.admin.title'),
            className: 'FofFormattingModal',
            items: (s) => [
                app.forum.attribute('fof-formatting.plugins').map((plugin) => (
                    <BooleanItem name={`fof-formatting.plugin.${plugin.toLowerCase()}`} cast={Number} setting={s}>
                        <a href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`} target="_blank">
                            {plugin}
                        </a>
                        <span>&nbsp;—&nbsp; {app.translator.trans(`fof-formatting.admin.plugins.${plugin}`)}</span>
                    </BooleanItem>
                )),
            ],
        });
});
