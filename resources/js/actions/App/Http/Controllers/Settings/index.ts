import GeneralSettingsController from './GeneralSettingsController'
import ProfileController from './ProfileController'
import PasswordController from './PasswordController'
import TwoFactorAuthenticationController from './TwoFactorAuthenticationController'
import SmtpController from './SmtpController'
const Settings = {
    GeneralSettingsController: Object.assign(GeneralSettingsController, GeneralSettingsController),
ProfileController: Object.assign(ProfileController, ProfileController),
PasswordController: Object.assign(PasswordController, PasswordController),
TwoFactorAuthenticationController: Object.assign(TwoFactorAuthenticationController, TwoFactorAuthenticationController),
SmtpController: Object.assign(SmtpController, SmtpController),
}

export default Settings