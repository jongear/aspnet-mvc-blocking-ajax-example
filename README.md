# aspnet-mvc-blocking-ajax-example

When concurrent requests are made to MVC through the same session they are run synchronously to ensure that the session is updated uniformly.  This is problematic for async workloads that are AJAX heavy as it causes all async calls to run synchronously.

This demo will work through two examples

### Blocking Example

This example will attempt to call 3 methods, each will return a value for each of the 3 columns synchronously.

- Call 1 will return in 2.5 seconds
- Call 2 will return in 5 seconds
- Call 3 will return in 7.5 seconds
- Total Elapsed call time should be roughly 15 seconds

### Asynchronous Example

This example will also attempt to call 3 methods, each will return a value for each of the 3 columns. Since this method is utilizing the readonly method we will not experience session blocking

- Call 1 will return in 2.5 seconds
- Call 2 will return in 5 seconds
- Call 3 will return in 7.5 seconds
- Total Elapsed call time should be roughly 7.5 seconds
