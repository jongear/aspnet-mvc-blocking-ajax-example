# aspnet-mvc-blocking-ajax-example

When concurrent requests are made to MVC through the same session they are run synchronously to ensure that the session is updated uniformly.  This is problematic for async workloads that are AJAX heavy as it causes all async calls to run synchronously.
