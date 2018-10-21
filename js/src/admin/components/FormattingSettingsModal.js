import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

export default class FormattingSettingsModal extends SettingsModal {
    className() {
        return 'FofFormattingModal Modal--medium';
    }
    title() {
        return 'FriendsOfFlarum Formatting';
    }
    form() {
        const plugins = app.forum.attribute('fof-formatting.plugins') || [];

        return [
            <div className="Form-group">
                {plugins.map(plugin => {
                    const key = `fof-formatting.plugin.${plugin.toLowerCase()}`;

                    return Switch.component({
                        state: Number(this.setting(key)()),
                        children: <a href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`}>{plugin}</a>,
                        onchange: this.setting(key),
                    });
                })}
            </div>,
        ];
    }
}
