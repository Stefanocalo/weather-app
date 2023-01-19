import bookmarkReducer, {
    startGetBookmarks,
    successGetBookmarks,
    setShowingBookmarks,
    failGetBookmarks,
    addBookmark,
    removeBookmark,
    fetchBookmarksData
} from './bookmarksSlice';


describe('bookmark reducer', () => {
    const initialState = {
        bookmarks: [
           {
            city: 'Milan',
            id: 123,
            data: []
           }
        ],
        isLoading: false,
        error: false,
        showingBookmarks: false
    }

    it('should handle initial state', () => {
        expect(bookmarkReducer(initialState, {type: 'unknown'})).toEqual({
            bookmarks: [
               {
                city: 'Milan',
                id: 123,
                data: []
               }
            ],
            isLoading: false,
            error: false,
            showingBookmarks: false
        })
    });
    it('should set isLoading: true', () => {
        const actual = bookmarkReducer(initialState, startGetBookmarks())

        expect(actual.isLoading).toEqual(true)
    });
    it('should set isLoading: false && add data', () => {
        const actual = bookmarkReducer(initialState, successGetBookmarks({index: 0, data: {location:{name: 'Milan'}, current: {temp_c: 8}}}));

        expect(actual.bookmarks).toEqual(
            [
                {
                 city: 'Milan',
                 data: {
                    current: {temp_c: 8},
                    location:{name: 'Milan'}
                 },
                 id: 123,
                }
            ]
            
        )
    });
    it('should set error: false', () => {
        const actual = bookmarkReducer(initialState, failGetBookmarks());

        expect(actual.error).toEqual(true);
    });
    it('set showingBookmark: true', () => {
        const actual = bookmarkReducer(initialState, setShowingBookmarks());

        expect(actual.showingBookmarks).toEqual(true);
    });
    it('should add a bookmark', () => {
        const actual = bookmarkReducer(initialState, addBookmark( {
            city: 'Rome',
            id: 456,
            data: []
        }));

        expect(actual.bookmarks).toEqual([
            {city: 'Milan', id: 123, data: []},
            {city: 'Rome', id: 456, data: []}
        ])

    });
    it('should remove a bookmark', () => {
        const actual = bookmarkReducer(initialState, removeBookmark({id: 123}));

        expect(actual.bookmarks).toEqual([]);
    })
});

