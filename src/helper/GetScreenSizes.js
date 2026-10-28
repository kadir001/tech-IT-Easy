
export function getScreenSizes(tv) {
    let screenSizes = '';

    for (let i = 0; i < tv.availableSizes.length; i++) {
        const inch = tv.availableSizes[i];
        const centimeter = Math.round(inch * 2.56);

        if (i > 0) {
            screenSizes += ' | ';
        }

        screenSizes += inch + ' inch (' + centimeter + ' cm)';
    }

    return screenSizes;
}
