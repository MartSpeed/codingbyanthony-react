# coding<span style="color: green">**BY**</span>anthony

## <span style="color: orange">**#code100**</span>

---

## <em>**REACT**</em>

<br>

### - **PROPS**
<p>
    PROPS are simply objects that are derived from STATE
</p>

### - **STATES**
<p>
    STATE is a description of your App. STATE is an object that describes your application. STATE is able to change, the values of the object you are manipulating.
</p>

<ul>
    <li>
        what is the best way to setup STATE components?
    </li>
    <li>
        how do I set up state components?
    </li>
</ul>

<br>

### <span style="color: red">*ISSUES*</span>
---

1. changed the functional component to a class component results in a blank HTML document that does not render the code.
- [RESOLVED] | reverted the class component back to a functional component, however I still do not know why it did not work as a class component for versin react 18.
- [QUESTION] | why did the class component not render to the DOM?
    - [SOLVED] | I had open/close parens in front of the class Component

2. Git wasnt pushing my branch for the repo
    - [SOLVED] I had to include the origin name for the repo. git push <remote> <branch>