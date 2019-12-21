const formatRegularExpression = (number) => {
    return number.replace(/^(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/);
}

export default formatRegularExpression;