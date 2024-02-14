# Lesson 1: The Document Object Model (DOM)

## Introduction

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document. This lesson introduces you to the DOM and how to manipulate it using JavaScript.

## Understanding the DOM

The DOM is a hierarchical representation of an HTML document. Each element, attribute, and piece of text in the HTML is represented by a node in the DOM. The nodes are organized in a tree structure, with the `document` node at the root.

## Accessing the DOM

JavaScript provides several methods to access and manipulate the DOM. The `document.getElementById(id)` method allows you to select an element by its ID. The `document.getElementsByTagName(name)` method allows you to select elements by their tag name. The `document.getElementsByClassName(name)` method allows you to select elements by their class name.

## Modifying the DOM

Once you have selected an element, you can modify its attributes and content. The `element.setAttribute(name, value)` method allows you to set the value of an attribute. The `element.removeAttribute(name)` method allows you to remove an attribute.

You can also modify the structure of the DOM. The `element.appendChild(child)` method allows you to add a child node to an element. The `element.removeChild(child)` method allows you to remove a child node from an element.

## DOM Methods and Properties

The DOM provides several methods and properties to get and set the content and style of elements. The `element.textContent` property allows you to get and set the text content of an element. The `element.innerHTML` property allows you to get and set the HTML content of an element. The `element.style` property allows you to get and set the CSS style of an element.

## Conclusion

By the end of this lesson, you will have a solid understanding of the DOM and how to manipulate it using JavaScript. You will be able to select, create, append, remove, and update elements and attributes. You will also be able to use the DOM methods and properties to get and set the text content, inner HTML, and style of elements. This knowledge will enable you to create dynamic and interactive web pages.