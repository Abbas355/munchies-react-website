import usFlag from '../../../../../public/static/country-flag/english.png'
import arFlag from '../../../../../public/static/country-flag/arabic.png'
import spanFlag from '../../../../../public/static/country-flag/spain.png'
import finnishFlag from '../../../../../public/static/country-flag/finnish.png'

export const languageLists = [
    {
        languageName: 'Finnish',
        languageCode: 'fi',
        countryCode: 'FI',
        countryFlag: finnishFlag.src,
    },
    ,
    {
        languageName: 'English',
        languageCode: 'en',
        countryCode: 'US',
        countryFlag: usFlag.src,
    },
    {
        languageName: 'Arabic',
        languageCode: 'ar',
        countryCode: 'SA',
        countryFlag: arFlag.src,
    },
    {
        languageName: 'Spanish',
        languageCode: 'es',
        countryCode: 'es',
        countryFlag: spanFlag.src,
    },
]
