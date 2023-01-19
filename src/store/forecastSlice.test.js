import forecastReducer, {
    startGetForecast,
    getForecastSuccess,
    getForecastFail,
    setSearchTerm,
    startGetResults,
    searchSuccess,
    searchError,
    setshowingResults,
    setUnit
} from './forecastSlice';

describe('testing forecastSlice', () => {

    const initialState = {
    forecast: [],
    isLoading: true,
    error: false,
    searchTerm: '',
    searchLoading: false,
    searchError: false,
    showingResults: false,
    searchResults: [],
    isCelsius: true
    };

    it('set isLoading: true', () => {
        const actual = forecastReducer(initialState, startGetForecast());

        expect(actual.isLoading).toEqual(true);
        expect(actual.error).toEqual(false);
        expect(actual.showingResults).toEqual(false);
    });
    it('set isLoading: false and add payload to forecast', () => {
        const payload = {location: {name: 'Rome'}, current: {temp_C: 3}}
        const actual = forecastReducer(initialState, getForecastSuccess(payload));

        expect(actual.isLoading).toEqual(false);
        expect(actual.error).toEqual(false);
        expect(actual.showingResults).toEqual(false);
        expect(actual.forecast).toEqual({location: {name: 'Rome'}, current: {temp_C: 3}})
    });
    it('set error: true', () => {
        const actual = forecastReducer(initialState, getForecastFail());

        expect(actual.isLoading).toEqual(false);
        expect(actual.error).toEqual(true);
        expect(actual.showingResults).toEqual(false);
        expect(actual.forecast).toEqual([])
    });
    it('should set searchTerm', () => {
        const actual = forecastReducer(initialState, setSearchTerm('testing'));

        expect(actual.searchTerm).toStrictEqual('testing')
    });
    it('should set isLoadin: searchLoading', () =>{
        const actual = forecastReducer(initialState, startGetResults());

        expect(actual.searchLoading).toEqual(true);
    });
    it('shoudl set: searchLoading: false, showingResults: true, searchError: false && add payload to searchResult', () => {
        const payload = {id:123, name: 'Rome', country: 'Italy'}
        const actual = forecastReducer(initialState, searchSuccess(payload));

        expect(actual.searchLoading).toEqual(false);
        expect(actual.searchError).toEqual(false);
        expect(actual.showingResults).toEqual(true);
        expect(actual.searchResults).toEqual({id:123, name: 'Rome', country: 'Italy'})
    });
    it('shound set searchError: true', () => {
        const actual = forecastReducer(initialState, searchError());

        expect(actual.searchError).toEqual(true);
    });
    it('should set showingResult: false', () => {

        const state = {
            forecast: [],
            isLoading: true,
            error: false,
            searchTerm: '',
            searchLoading: false,
            searchError: false,
            showingResults: true,
            searchResults: [],
            isCelsius: true
        }

        const actual = forecastReducer(state, setshowingResults());

        expect(actual.showingResults).toEqual(false)
    })
    it('should toggle setUnit to false', () => {
        const actual = forecastReducer(initialState, setUnit());

        expect(actual.isCelsius).toEqual(false);
    });
    it('should toggle setUnit to true', () => {

        const initialState = {
            idCelsius: false
        }

        const actual = forecastReducer(initialState, setUnit());

        expect(actual.isCelsius).toEqual(true);
    });
    
})