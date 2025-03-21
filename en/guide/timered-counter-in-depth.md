# In-depth TimeredCounter {#timered-counter-in-depth}

## Structure {#structure}

TimeredCounter consists of <part @mouseenter="handleHighlight($event, '.roller-part:nth-child(1)')" />, <digit @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part__wrapper:first-child')" />, <cell @mouseenter="handleHighlight($event, '.roller-part:nth-child(2) .roller-part__wrapper:nth-last-child(2) .roll-item')" />, and <suffix @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part__suffix')" />. You can see these parts annotated in the example below.

The <suffix @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part__unit')" /> is an optional part. In the example below, it is used to display time units (day, hour).

<DemoContainer title="TimeredCounter Structure"><TimeredCounterStruct /></DemoContainer>

### Hierarchy {#hierarchy}

Using the example above as a reference, the hierarchy of TimeredCounter is as follows:

```
part -> digit -> cell
-> digit -> cell
-> suffix (day)

part -> digit -> cell
-> digit -> cell
-> suffix (hour)
```

## Usage {#usage}

> For simple usage (such as [simple scrolling effect](./examples/simple-usage), [localization](./examples/locale-usage)), you don't need to worry about the implementation details of TimeredCounter.
>
> However, when we need to customize animation effects, such as (<TimeredCounterText />), or need to customize the style of each digit, understanding the structure of TimeredCounter is essential.

To provide enough freedom to customize animation effects and styles, you can use

1. `animationOptions` to set animation properties down to the <digit /> level.
2. `cellStyle` to set style properties down to the <cell /> level.

### Set Animation Options {#set-animation-options}

`animationOptions` is the second parameter of [`Element.animate(keyframes, options)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#options), where you can set animation properties such as `duration`, `delay`, `easing`, etc.

The configuration can take the following forms:

- An object containing the configuration items you set, which will be applied to all <digit />.
  ```js
  { duration: 0.5, delay: 0.1 }
  ```
- A one-dimensional array, which will be applied to all <digit /> in the corresponding <part />.
  ```js
  [
    { duration: 0.5, delay: 0.1 }, // part 1
    { duration: 0.5, delay: 0.4 }, // part 2
    ...
  ]
  ```
- A two-dimensional array, which will be applied to the corresponding <digit /> in the corresponding <part />.
  ```js
  [
    [ // part 1
      { duration: 0.5, delay: 0.1 }, // digit 1
      { duration: 0.5, delay: 0.4 }, // digit 2
      ...
    ],
    ...
  ]
  ```
- A callback function that accepts an object containing:

  - `preprocessData`: a two-dimensional array containing the test results for each <digit />.
  - `data`: the data used for scrolling. Contains the data for constructing the scroll list for each <digit />.
  - `direction`: the direction of scrolling. `up` or `down`.
  - `value`: the new and old values of the number.

  The return value of the function can be one of the three forms above.

For example, in the [delay example](./examples/animated-usage#delay), after enabling **delayed increment**, the animation delay for each <digit /> is set to achieve the effect of incremental delay.

<<< @/components/AdvancedDelayDemo.vue#increaseDelay{16-18 js}

### Custom Style {#custom-style}

`cellStyle` is a `CSSProperties` object where you can set the style of <cell />.

The configuration forms add one more layer on top of `animationOptions`:

- A three-dimensional array, which will be applied to the corresponding <cell /> in the corresponding <digit /> in the corresponding <part />.
  ```js
  [
    [
      // part 1
      [
        // digit 1
        { color: "red" }, // cell 1
        { color: "blue" }, // cell 2
      ],
    ],
  ];
  ```
- The callback function form is the same as `animationOptions`. It can also return a three-dimensional array.
