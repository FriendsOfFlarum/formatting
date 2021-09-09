import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import LinkButton from 'flarum/common/components/LinkButton';

export default class FormattingExtensionSettingsPage extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);
    }

    content() {
        return [
            <div className="container">
                <div className="FoFFormattingSettingsPage">
                    <div className="Form">
                        {app.forum.attribute('fof-formatting.plugins').map((plugin) =>
                            this.buildSettingComponent({
                                type: 'boolean',
                                setting: `fof-formatting.plugin.${plugin.toLowerCase()}`,
                                label: (
                                    <LinkButton
                                        href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`}
                                        external={true}
                                        target="_blank"
                                    >
                                        {plugin}
                                    </LinkButton>
                                ),
                                help: app.translator.trans(`fof-formatting.admin.plugins.${plugin}`),
                            })
                        )}
                        <div className="Form-group">{this.submitButton()}</div>
                    </div>
                </div>
            </div>,
        ];
    }
}
