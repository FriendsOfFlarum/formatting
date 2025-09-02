import Form from 'flarum/common/components/Form';
import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import LinkButton from 'flarum/common/components/LinkButton';
import Icon from 'flarum/common/components/Icon';

export default class FormattingExtensionSettingsPage extends ExtensionPage {
  content() {
    const plugins = app.forum.attribute<[]>('fof-formatting.plugins');
    return (
      <div className="container">
        <div className="FoFFormattingSettingsPage">
          <Form>
            {plugins.map((plugin: string) =>
              this.buildSettingComponent({
                type: 'boolean',
                setting: `fof-formatting.plugin.${plugin.toLowerCase()}`,

                label: plugin,

                help: (
                  <LinkButton
                    className="Button Button--link"
                    href={`https://s9etextformatter.readthedocs.io/Plugins/${plugin}/Synopsis`}
                    external={true}
                    target="_blank"
                  >
                    {app.translator.trans(`fof-formatting.admin.plugins.${plugin}`)} <Icon name="fas fa-external-link-alt" />
                  </LinkButton>
                ),
              })
            )}
            <div className="Form-group">{this.submitButton()}</div>
          </Form>
        </div>
      </div>
    );
  }
}
