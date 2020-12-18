import ExtensionPage from 'flarum/components/ExtensionPage';
import { settings } from '@fof-components';

const {
    items: { BooleanItem },
} = settings;

export default class FormattingExtensionSettingsPage extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);

        this.setting = this.setting.bind(this);
    }

    content() {
        return [
            <div className="container">
                <div className="FoFFormattingSettingsPage">
                    {app.forum.attribute('fof-formatting.plugins').map((plugin) => (
                        <div className="Form-group">
                            <BooleanItem name={`fof-formatting.plugin.${plugin.toLowerCase()}`} cast={Number} setting={this.setting.bind(this)}>
                                <a href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`} target="_blank">
                                    {plugin}
                                </a>
                                <span>&nbsp;—&nbsp; {app.translator.trans(`fof-formatting.admin.plugins.${plugin}`)}</span>
                            </BooleanItem>
                        </div>
                    ))}
                    <div className="Form-group">{this.submitButton()}</div>
                </div>
            </div>,
        ];
    }
}
