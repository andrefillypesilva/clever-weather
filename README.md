# Clever Weather
It is a simple application that shows the weather for the next couple of days.

## Instalation
After clone this repository you will need to run `npm i` to install all dependencies.

![Structure Diagram](https://github.com/andrefillypesilva/clever-weather/blob/master/cleverweather-showcase.png?raw=true)

## How to run
To run this application in your local environment you will need only run `npm start` as defined in the package.json file (it will run the application with proxy).
Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Attention
This app uses [Meta Weather API](https://www.metaweather.com/api/), then unfortunately it has problems with Cors. To solve it, I have chosen to use [Cors Anywhere APP](https://cors-anywhere.herokuapp.com), a simple and free application that allows us to solve Cors problems requesting through it. So before run your project you need to access this [page on Cors Anywhere APP](https://cors-anywhere.herokuapp.com/corsdemo) and click in the `"Request temporary access to the demo server"` only to say them you will make request using it.

## Implemented Features
#### Project Structure
This project is organized in two main modules: **core** (for pages) and **shared** (for shared components/services/guards/interceptors). For enums and interfaces you have a **models** folder and for mocks that are used in unit tests you have a **test-mocks** folder.

#### Lazy Loading
In the file `app-routing.module.ts` you have a lazy loading for **core module** (it is a simple implementation made for the purpose of showing this feature).

#### Router Guard
It has been created two simple guards to implement an onboarding component for first access. `shared/guards/first-access.guard.ts` allows you to access onboarding if it is you first-access and redirects you for home page if it is not. `shared/guards/not-first-access.guard.ts` allows you to access home page if it is not your first-access and redirects you for onboarding if it is.

#### Interceptors
The `shared/interceptors/request.interceptor.ts` file is an implementation of a interceptor that put headers in the request before do it.

#### Reactive Forms
It has been done a simple implementation of **reactive forms** in the `core/home/home.component.ts` file. It is created just to show you how to use **FormBuilder** dependency injection to use a reactive form.

#### Usage of re-usable components
In the **shared module** there are three re-usable components which are:
- onboarding-card (it  is used in **onboarding** component)
- weather-box (it is used in **home** component)
- weathher-card (it is used in **weather-box** component)

#### Smartphone features
This project is responsive for most of devices in market and has two smartphone features:
- Geolocation access (before finish onboarding, it asks you to allow geolocation permission. It also works in desktop version)
`core/onboarding/onboarding.component.ts`
```
navigator.geolocation.getCurrentPosition(() => {
    if (this.setLocalStorageFinished()) {
    this.router.navigate(['/home']);
    } else {
    alert('Something went wrong! We can not save your local storage first access.');
    }
}, () => {
    alert('To use this app, you need to allow geolocation.');
});
```

- Share (in the end of weather-cards in home page you have a link to share this app with a friend. It opens share options for your device)
`shared/components/weather-card/weather-card.component.ts`
```
share(): void {
    if (navigator.share) {
        navigator
        .share({
            title: 'CleverWeather',
            text: 'Everything about weather in your city.',
            url: 'https://localhost:4201',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('It is not possible share content in this device.');
    }
}
```

#### Style organized using BEM and Less
In `assets/scss` folder you have a basic structure to organize **scss** of project.
```
abstracts (variables and mixins being used project)
- mixins
- variables

base (resetting browser style and typography style)
- base
- typography

components (components being used in project)
- button

layout (layout specifiications)
- header

pages (pages in core-module)
- home
- onboarding
```

## Running unit tests
Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### core/onboarding/onboarding.component.spec.ts
- Test if **step** variable increases when **next()** is called
- Test if **first-access** is set into local-storage when **setLocalStorageFinished()** is called
- Test if previously defined title for first onboarding-card is rendered on screen

#### shared/services/local-storage.service.spec.ts
- Test if **first-access** is different after call **setItem()**
- Test if local-storage returns [null] when **fist-access** does not yet exist

#### shared/services/weather.service.spec.ts
- Test if **getPlaceByName()** returns an object of [Place] and if it returns a mocked data for Lisbon
- Test if **getWeather()** returns an object of [ConsolidatedWeather] and if it returns a mocked data for Lisbon

#### shared/test-mocks
There are two mocks for test **request services**:
- `mock-places.mock.ts` - [MOCK__PLACES]
- `mock-consolidated.weather.mock.ts` - [MOCK__CONSOLIDATED_WEATHER]

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Last Considerations
The illustrations used in this project is free to use and can be found on [DrawKit website](https://www.drawkit.io/free)

## License
[MIT](https://choosealicense.com/licenses/mit/)
