# React Tips

**The top tips that I always need**

-    If you are getting errors when you think changes you have made are legitimate syntax, try reloading the client. *This is especially true if an import is added.* React out of the box doesn't take changes in imports that well.
-    Only one JSX element can be returned as a parent element. Other JSX elements can be children of that component. React has multiple ways of accomidating this. This project uses "HOCs", as in "higher order components." The most common one is `Aux`, from `/src/components/hocs/Aux.js`. `Aux` merely wraps the children and their props in an outer HTML element with no styling, allowing the children to be adjacent HTML elements that are valid JSX. For example of an invalid JSX component and a valid one in and `<Aux>`:

```JSX
return (
    <div>
        <h1>Hello World</h1>
    </div>

    <div>Another child element in the return statement. Incorrect.</div>
);
````

```JSX
return (
    <Aux>
        <div>
            <h1>Hello World</h1>
        </div>

        <div>Another child element in the return statement. Valid because it is wrapped in `Aux`.</div>
    </Aux>
)
```

-    Comments in the returned JSX space are left in {/*syntax like this*/}.

```JSX
return (
    <div>
        <h1>Hello World</h1>
	</div>
);
```

* Component names in CamelCase.
* Folder nesting probably should not exceed 3 or 4 levels.
  