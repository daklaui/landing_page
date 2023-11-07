
const commonTextStyle: React.CSSProperties = {
    color: '#343537',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
};

export const textStyle: React.CSSProperties = {
    ...commonTextStyle,
    fontFamily: 'PT Serif',

    marginBottom: 5
};

export const secondaryTextStyle: React.CSSProperties = {
    ...commonTextStyle,
    fontFamily: 'Cabin',

};