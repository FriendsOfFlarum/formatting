import { settings } from '@fof-components';
const {
    SettingsModal,
    items: { BooleanItem },
} = settings;

app.initializers.add('fof/formatting', () => {
    app.extensionSettings['fof-formatting'] = () =>
        app.modal.show(
            new SettingsModal({
                title: 'FriendsOfFlarum Formatting',
                className: 'FofFormattingModal',
                items: [
                    app.forum.attribute('fof-formatting.plugins').map((plugin) => (
                        <BooleanItem key={`fof-formatting.plugin.${plugin.toLowerCase()}`} cast={Number}>
                            <a href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`} target="_blank">
                                {plugin}
                            </a>
                            <span>&nbsp;—&nbsp; {app.translator.trans(`fof-formatting.admin.plugins.${plugin}`)}</span>
                        </BooleanItem>
                    )),
                ],
            })
        );
});
