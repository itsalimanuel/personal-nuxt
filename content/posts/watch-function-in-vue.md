---
title: Exploring the Watch Function in Vue 3 Composition API
description: The Vue 3 Composition API introduces a powerful function called `watch`, which allows developers to monitor changes in reactive values and execute code accordingly.
---


![Exploring the Watch Function in Vue 3 Composition API](/posts/vue.png)


# Exploring the Watch Function in Vue 3 Composition API

The Vue 3 Composition API introduces a powerful function called `watch`, which allows developers to monitor changes in reactive values and execute code accordingly. The `watch` function provides a flexible and reactive way to handle data changes in Vue components. In this article, we'll dive deep into the `watch` function and explore its various features and usage scenarios.

## Introduction to the Watch Function

In Vue 3's Composition API, the `watch` function allows us to create watchers for reactive values and react to changes. It provides a way to observe and respond to changes in reactive state, computed properties, or even custom functions.

The basic syntax of the `watch` function is as follows:

```javascript
watch(source, callback, options)
```

- `source`: The value or expression to watch.
- `callback`: A function to be executed when the `source` value changes.
- `options` (optional): An object containing additional options for the watcher.

## Watching Reactive State

One common use case for the `watch` function is to monitor changes in reactive state. Let's say we have a reactive `data` object that contains various properties. We can create a watcher to track changes in a specific property like this:

```javascript
import { ref, watch } from 'vue';

export default {
  setup() {
    const data = ref({ name: 'John', age: 25 });

    watch(() => data.value.name, (newName, oldName) => {
      console.log(`Name changed from ${oldName} to ${newName}`);
    });

    // ...
  },
};
```

In the above example, we use the `watch` function to watch the `name` property of the `data` object. Whenever the `name` property changes, the provided callback function will be called, providing the new and old values of the property.

## Watching Computed Properties

The `watch` function is not limited to just watching reactive state. We can also create watchers for computed properties. Computed properties are functions that derive their value from reactive state and update automatically when the dependencies change. Here's an example:

```javascript
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('John');
    const lastName = ref('Doe');

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    watch(fullName, (newFullName, oldFullName) => {
      console.log(`Full name changed from ${oldFullName} to ${newFullName}`);
    });

    // ...
  },
};
```

In this example, we have two reactive values `firstName` and `lastName`. We compute the full name by combining these two values into the `fullName` computed property. By watching the `fullName`, we can track changes in the derived value and perform necessary actions accordingly.

## Deep Watching

Sometimes, we may need to perform deep watching to observe changes in nested properties of an object or elements of an array. Vue provides the `deep` option to enable deep watching. Let's consider an example:

```javascript
import { ref, watch } from 'vue';

export default {
  setup() {
    const data = ref({ nested: { prop: 'value' } });

    watch(
      () => data.value,
      (newData, oldData) => {
        console.log('Data changed:', newData);
      },
      { deep: true }
    );

    // ...
  },
};
```

In this example, we create a watcher for the entire `data` object by passing a getter function `() => data.value` as the `source`. We enable deep watching by specifying `{ deep: true }` in the options object. Now, any changes to the nested properties of the `data` object will trigger the watcher.

## Stopping a Watcher

Sometimes, we may want to stop watching a value after a certain condition is met. The `watch` function returns a `stop` function that can be called to stop the watcher. Here's an example:

```javascript
import { ref, watch } from 'vue';

export default {
  setup() {
    const data = ref('value');

    const stopWatcher = watch(data, (newData, oldData) => {
      console.log('Data changed:', newData);

      if (newData === 'stop') {
        stopWatcher(); // Stop the watcher
      }
    });

    // ...
  },
};
```

In this example, we create a watcher for the `data` value. Inside the watcher's callback, we check if the value is `'stop'`. If the condition is met, we call `stopWatcher()` to stop the watcher from further observing changes.

## Conclusion

The `watch` function in Vue 3's Composition API provides a powerful mechanism for monitoring changes in reactive values. It allows us to reactively execute code whenever a watched value changes, whether it's reactive state, computed properties, or custom functions. By leveraging the `watch` function, we can build more robust and reactive Vue components.

In this article, we explored the `watch` function and its various features. We saw how to watch reactive state and computed properties, enable deep watching, and stop a watcher when needed. The `watch` function is a valuable tool in the Vue 3 Composition API toolkit, empowering developers to create more responsive and reactive applications.

Remember to experiment with the `watch` function and explore its possibilities to harness the full potential of Vue 3's Composition API!