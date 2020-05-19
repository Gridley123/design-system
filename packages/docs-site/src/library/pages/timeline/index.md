---
title: Compound Timeline
description: A collection of composable and presentation agnostic Compound Components, Hooks and a Context Provider, to help aid in the creation of scheduling based user-interfaces.
tags: public
template: framework
---

import { Badge } from '@royalnavy/react-component-library'

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Motivation

Identify commonality across applications utilising scheduling related patterns, with the aim to abstract out a library that helps to ensure the integrity and future maintainability of applications with disparate sets of scheduling related use cases.
We identified commonality across applications in two key areas:

### How something "looks and feels"
- Somewhat nuanced but based on problem domain

### How something works "under the hood"
- Data manipulation
- Positioning arbitrary components over a timeline
- Generated data structures and state
- Common but extensible interfaces


</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Installation

To install the framework, use the commands opposite. You can use either [yarn](https://yarnpkg.com/) or [npm](https://npmjs.com/).

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">Command Line</span>
</div>

```
// npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

</div>
</div>


<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Options

You can view a collection of example stories in our [Storybook](https://storybook.royalnavy.io).

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">startDate <Badge color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge></h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value">-</p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">today</h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>new Date()</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">range</h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value">-</p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">dayWidth</h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value">-</p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">TimelineExample.js</span>
</div>

```js
import React from 'react'

import { 
  Timeline, 
  TimelineTodayMarker,
  TimelineSide,
  TimelineMonths, 
  TimelineWeeks, 
  TimelineDays, 
  TimelineRows, 
  TimelineRow, 
  TimelineEvents, 
  TimelineEvent 
} from '@royalnavy/react-component-library'

const ExampleTimeline = () => {
  return (
    <Timeline 
      startDate={new Date(2020, 4, 0)} 
      today={new Date(2020, 3, 15)} 
      range={3}
      dayWidth={30}
    >
      <TimelineTodayMarker />
      <TimelineSide/>
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 14)}
              endDate={new Date(2020, 3, 18)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 3)}
              endDate={new Date(2020, 3, 8)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}
```

</div>
</div>


<div className="rn-fw-row rn-fw-row-section">
<div className="rn-fw-copy rn-fw-md">

## Compound Components & Composition

In React, [composition](https://reactjs.org/docs/composition-vs-inheritance.html) is a natural pattern of the component model. It's how we build components from other components, of varying complexity and specialization.

The consumer can pick and choose what functionality to include in their Timeline via the declarative JSX API.

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>


<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Custom Component Presentation

We aim to empower the consumer by enabling them to override the presentation of the exposed compound components:

- Full control over look and feel (no opinion about markup or styles)
- Consistent underlying implementation across applications
- Single set of robust automated tests

### Render Props

[Render props](https://reactjs.org/docs/render-props.html) allow us to provide custom persentation layers to our compound components by exposing any relevant internal state. See the example usage opposite for the  `TimelineMonths`  component.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">TimelineExample.js</span>
</div>

```js
import React from 'react'

import { 
  Timeline, 
  TimelineMonths, 
  TimelineRows 
} from '@royalnavy/react-component-library'

const CustomTimelineMonth = (
  index,
  dayWidth,
  daysTotal,
  startDate
) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: `${dayWidth * daysTotal}px`,
        // ...
      }}
    >
      {startDate}
    </span>
  )
}

const ExampleTimeline = () => {
  return (
    <Timeline>
      <TimelineMonths render={CustomTimelineMonth} />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}
```


</div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Context Provider
[Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

We expose the `TimelineContext` provider so that a consumer can create their own application specific components. The context provider exposes Timeline state and a `dispatch` function for dispatching reducer actions against the store.

### State & Action dispatcher

In this example we have created a custom component that consumes Timeline related state and dispatches reducer actions when buttons are clicked.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">ContextExample.js</span>
</div>

```js
import React, { useContext } from 'react' 

import { 
  Timeline, 
  TimelineRows 
  TimelineContext, 
  TIMELINE_ACTIONS 
} from '@royalnavy/react-component-library'

const CustomTimelineComponent = () => {
  const { state: { months, weeks, days, options }, dispatch } = useContext(TimelineContext)

  return (
    <div>
      <button onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}>Previous</button>
      <button onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}>Next</button>
    </div>
  )
}

const ExampleTimeline = () => {
  return (
    <Timeline>
      <CustomTimelineComponent />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}
```


</div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Hooks
We expose some [hooks](https://reactjs.org/docs/hooks-intro.html) in order to aid in the creation of your own custom Timeline components.

### useTimelinePosition

This hook takes a `startDate` and optional `endDate` and in return exposes the width and position (in the form of an `offset`) of an item relative to the date range currently displayed by the Timeline.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">HooksExample.js</span>
</div>

```js
import React from 'react'

import { useTimelinePosition } from '@royalnavy/react-component-library'

const CustomTimelineComponent = ({
  startDate,
  endDate
}) => {
  const {
    width,
    offset,
    isBeforeStart,
    isAfterEnd
  } = useTimelinePosition(startDate, endDate)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <div style={{
        position: 'absolute',
        display: 'inline-block',
        width,
        left: offset
        // ...
      }} 
    />
  )
}
```

</div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Advanced Custom Layouts
Through the use of clever composition and custom styling, it's possible to create layouts that are either nuanced or high in complexity. Below is an [example of a custom layout](https://github.com/m7kvqbe1/fp-grey-box) that adds groupings to rows:

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>


<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Hooks API

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">startDate <Badge color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge></h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value">-</p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The start date of the event.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">endDate</h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>NULL</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The start date of the event.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>


<div className="rn-fw-row rn-fw-row-section">
<div className="rn-fw-copy rn-fw-md">

## Component APIs
Here you will find comprehensive API documentation for the Timeline Components.

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>


<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## Timeline

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">startDate <Badge color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge></h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value">-</p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">today</h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>new Date()</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Today's current date - default is the system date time.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">range</h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>3</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The number of months to display at any one time.</p>
    </div>
  </div>
</div>


<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">dayWidth</h1>
    <Badge color="action" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>30</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The fixed width value of a single day (in pixels).</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>


<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## TimelineTodayMarker

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>Function&#60;today: Date, offset: string&#62;</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## TimelineSide

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>Function&#60;&#62;</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row">
<div className="rn-fw-copy rn-fw-md">

## TimelineMonths

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="action" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <p className="rn-fw-api-value"><code>Function&#60;index: number, isOddNumber: boolean, offsetPx: string, widthPx: string; dayWidth: number, daysTotal: number, startDate: Date&#62;</code></p>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>
