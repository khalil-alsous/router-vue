import Vue from "vue";

// Global Custom directive
Vue.directive("format", {
  bind: (el, binding) => {
    // console.log(binding.name);
    // console.log(binding.value);
    el.style.fontSize = binding.value + "px";

    // Use Modifier with directive by but (.) and Modifier name
    // Bold Modifier
    if (binding.modifiers.bold) el.style.fontWeight = "bold";

    // orange Modifier
    if (binding.modifiers.orange) el.style.color = "orange";
  },
});

// To Focus on the input directly when the page loads
Vue.directive("focus", {
  inserted: (el) => {
    el.focus();
  },
});

// to see how we use go to home page
