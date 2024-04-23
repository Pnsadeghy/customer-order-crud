export default interface ButtonPropInterface {
    theme?: 'primary' | 'danger' | 'outline-secondary'
    shape?: 'default' | 'round' | 'default icon' | 'round icon'
    size?: 'small' | 'normal' | 'large'
    submit?: boolean
    loading?: boolean
}