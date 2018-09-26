const Leakage =  require('leakage');

it('leak test', async() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    expect.hasAssertions();

     await Leakage.iterate.async(async () => {
        let dummyPromise = new Promise((resolve) => {
           setTimeout(() => resolve('ok'), 1);
        });

        try {
            const result = await dummyPromise;
            expect(result).toBeTruthy();
        } catch (e) {
            throw 'this should not happen ' + e;
        }
    });
})
