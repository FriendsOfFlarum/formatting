import app from 'flarum/app';
import SettingsModal from '@fof/components/admin/settings/SettingsModal';
import BooleanItem from '@fof/components/admin/settings/items/BooleanItem';

app.initializers.add('fof/formatting', () => {
    app.extensionSettings['fof-formatting'] = () => app.modal.show(
        new SettingsModal({
            title: 'FriendsOfFlarum Formatting',
            className: 'FofFormattingModal',
            items: [
                app.forum.attribute('fof-formatting.plugins').map(plugin =>
                    <BooleanItem key={`fof-formatting.plugin.${plugin.toLowerCase()}`} cast={Number}>
                        <a href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`} target="_blank">{plugin}</a>
                        <span>
                            &nbsp;—&nbsp; {app.translator.trans(`fof-formatting.admin.plugins.${plugin}`)}
                        </span>
                    </BooleanItem>
                ),
            ],
        })
    )
});
