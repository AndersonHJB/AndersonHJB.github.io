---
title: Lecture 13 GUI Basics
date: 2025-03-05 23:22:59
author: AI悦创
isOriginal: true
icon: blog
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true
 

backToTop: true
toc: true
watermark: true
---

::: details 原文

```java
## 1. Introduction to Views

So far we’ve worked on designing *models* to represent the data relevant to a problem domain, in a form that encapsulates the data behind an interface that clients can use without having to know any implementation details. The model is responsible for ensuring that it can’t get stuck in a bogus or invalid state, and exposes whatever appropriate observations and operations are needed while still preserving this integrity constraint.

We’ve also worked on simple synchronous *controllers* that allow users to interact with a model, in a form that encapsulates the user interactions and can provide feedback to users without having to redundantly ensure any integrity constraints. Moreover, controllers can be customized or enhanced without needing to change the model, making the model more convenient to use without making it any more complex.

Now, it’s time to introduce the third part of the MVC trio: *views*. Views are renderings of the data in the model, and can be as simple as printing debug output to a console, as complex as fancy graphical user interfaces, or anything in between. Dealing with GUIs also brings additional challenges, and we will discuss some of them.

### 1.1 Outline

This lecture starts by adding a text-based, interactive view to the program. This is closest to our earlier design for the controller, but it carves out a view cleanly. This example also illustrates the typical interactions between the model, view and controller in a simple manner.

We then progressively transition to graphical user interfaces. We start with *poorly-designed but working* code, and improve it in three stages. Initially, the code for the view will directly manipulate the model. Our first incremental improvement will decouple the view from the model so that it need not — and in fact *cannot* — do so. Our second improvement will add a new feature to the view, and add the ability to control that in the controller. Finally, our third improvement will generalize the controller to make its UI triggers more customizable.

The code for this lecture is available at the top of this page, as the [MVC code](https://course.ccs.neu.edu/cs3500/lec/gui_basics/code.zip) link. The second link provides code for a program with an incomplete GUI. It is recommended that you complete this exercise to practice with GUIs. Finally the third link provides a solution for this GUI.

## 2. Design

All examples in this lecture follow a common design. The model state (interface `IModel` and implementation `Model`) consists of a single `String` and offers methods to get and update it. All views (coupled with controllers wherever applicable) expose functionality to interactively show this string, and to update it.

### 3` `Text-based UI

In the TextUI directory we show a text-based user interface. The IView interface encapsulates all the methods that a view’s client would need to call: note how they correspond roughly to the “things” that a controller would need to tell the view to do. The TextView class implements this interface. It transmits all messages to a PrintStream object provided to it through its constructor. Similar to the design in [Lecture 8](https://course.ccs.neu.edu/cs3500/lec_controllers_mocks_notes.html) this allows us to test the view using any suitable PrintStream object.

The IController interface represents a controller: it has only method which is called to give control of the application to the controller. The TextController class implements the controller. It works with IModel, IView and Scanner objects to handle model, view and data input functionality respectively. At its heart, the controller goes through a loop that provides users with some options, takes further inputs depending on the chosen options and delegates to the model and view accordingly. Since the sequence of operations is largely fixed, this qualifies as a *synchronous* controller.

## 4. Stage 1: Introduction to GUIs

In the BadDesignButFunctional directory, we have a poorly written implementation of a simple program that uses the same model, but a graphical user interface.

Our `main()` method constructs a `Model`, and constructs a view that is given a reference to the model. The view interface (`IView`) has only three methods: to obtain the text the user has typed in to the text box, to clear that text box, and to echo a string to the label in the UI. The implementation of the view, `JFrameView`, is markedly more complicated in appearance than expected, but it breaks down into several simpler parts.

### 4.1 Frames and controls

Our program uses the Swing framework to show its UI. In Swing, an individual window is known as a *frame*, which can contain controls known as *components*. To create our own window, we design a class that subclasses from `JFrame`, do some work to establish the components in it, and then call `setVisible` to display the window. Within the constructor of our frame, we create four components: a *label* to show some text, a *text box* to edit text, and two *buttons*. Adding several controls to a frame requires that we give them a *layout*, which describes the spatial relationships between the controls. In this example, we’re using a `FlowLayout`, which allows the controls to wrap around as we resize the window. (Try running the project and resizing the window to be narrower than the controls are.) Different layout managers allow adding controls in [different ways](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html). Once controls are added to the UI, the `pack()` method is used tell the layout manager to determine the actual positions and sizes of all the controls.

In order for the controls to do anything, however, we need to add an *event handler* to them. An event handler, or *callback*, is simply a function that gets called when something interesting occurs. In our case, the clicking of different buttons should trigger a callback. In the jargon of Swing, clicking on buttons triggers their *action*, and so we must supply a function object that implements the [`ActionListener`](https://docs.oracle.com/javase/8/docs/api/java/awt/event/ActionListener.html) interface. (Other controls have additional events besides “actions”.) For convenience, Swing allows us to label each button with a so-called *action command*, which is a `String` of our choosing: when the `ActionListener`’s callback is invoked, it will be given an [`ActionEvent`](https://docs.oracle.com/javase/8/docs/api/java/awt/event/ActionEvent.html) object that knows the action command of the button that was clicked. In this way, we can use a single listener to listen to multiple buttons at once, and distinguish them by means of this command string. See the calls to `setActionCommand` and `setActionListener` and the implementation of `actionPerformed` in JFrameView.java for an example:

\```java
class JFrameView extends JFrame implements ActionListener {
  public JFrameView(String caption, IModel model) {
    ...
    echoButton = new JButton("Echo");           // Create a button,
    echoButton.setActionCommand("Echo Button"); // set its command,
    echoButton.addActionListener(this);         // set the callback,
    this.add(echoButton);                       // and add it to the UI

    exitButton = new JButton("Exit");           // ditto, for another button
    exitButton.setActionCommand("Exit Button");
    exitButton.addActionListener(this);
    this.add(exitButton);
    ...
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
    case "Echo Button": ...
    case "Exit Button": ...
    }
  }

  ...
}
\```

**Note:** Combining the event handlers of multiple buttons into a single function is only temporarily convenient: often, the code we want to run for one button is completely different from the code we want to run for a different button, so there’s not much benefit from merging them all. Instead, it is more common to create anonymous objects, or (even terser) lambda expressions, so that each button gets its own custom handler. We’ll see other idioms of setting up listeners below.

## 5. Stage 2: Decoupling the view from the model

The code above technically works, but it is very poorly designed: the view is responsible for mutating the model, which means there’s no separation of concerns between this view and any controller, and if we wanted to use the model with another sort of view, we’d be out of luck. In the BasicMVC directory, we start to remedy this. In particular, we want to separate out all the parts of the code that mutate the model, and isolate them within a controller.

To do this, we create a `Controller` class that takes in the model and the view — at their interface types, not at their concrete class types. We revise the view so that it no longer has access to the model at all. (This is overly drastic; we merely want to ensure that the view does not have *mutable* access to the model. We can revisit this later.) We next add a method to the view interface, `void setListener(ActionListener)`, which is the key indirection needed here. Instead of the view directly implementing the response to events, this method allows the view to take in a listener object and *forward* any events it receives to that listener.

\```java
public class JFrameView extends JFrame implements IView {
  public JFrameView(String caption) { // NOTE: No model!
    ...
    echoButton = new JButton("Echo"); // NOTE: No action listener
    echoButton.setActionCommand("Echo Button");
    this.add(echoButton);

    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    this.add(exitButton);
    ...
  }

  public void setListener(ActionListener listener) {
    echoButton.addActionListener(listener); // Rather than adding *this* as a listener,
    exitButton.addActionListener(listener); // add the provided one instead.
  }

  ...
}

public class Controller implements ActionListener {
  public Controller(IModel m, IView v) {
    this.model = m;
    this.view = v;
    view.setListener(this);
    view.display();
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "Echo Button": ...  // same code as before, but now
      case "Exit Button": ...  // it's extracted out of the view
    }
  }
}
\```

The controller is now the only part of the system that has mutable access to the model. Because it requested that the view register itself as the listener for the buttons, the controller gets called exactly when necessary, and it can decide what mutations to perform on the model. The view doesn’t even know that it’s received a controller object: as far as it’s aware, the controller is simply a random `ActionListener`. (**Note:** It is overly simplified to have the `Controller` directly implement `ActionListener` — after all, there might be many controls inside the view that could raise action events, and so having a *single* `ActionListener` isn’t a scalable approach. A better approach would be to have the `Controller` *have* one or more `ActionListener`s — i.e., preferring composition over inheritance — but we use this simplified form for now to reduce the number of classes in this example.)

**Note:** there is a subtle difference between the `setListener` method we’ve defined on our `IView` interface, and the `addActionListener` method present on the Swing components: our method’s name implicitly intends for only *one* listener at a time, but Swing components allow for multiple listeners. When we have multiple listeners, we’ll sometimes say that the control *broadcasts* its event to whoever’s listening, or that it *publishes* its event to whoever’s *subscribed* to it. There’s nothing limiting us from implementing this more general approach, but that generality wasn’t needed here.

## 6. Stage 3: Enhancing the view with keyboard support

Our next addition of functionality is shown in the KeyboardEvents directory: we want to add some keyboard-triggered behaviors. Specifically, we’ll add two fancy features to our UI: the ability to toggle the color of the text from black to red and back, and the ability to temporarily show the text in all-caps. We’ll switch colors every time we type the `'d'` key, and we’ll temporarily capitalize the text while we’re pressing and holding the `'c'` key. Interestingly, only one of these two new features requires adding a new method to our view interface.

First, we’ll need to generalize our `setListener` method, to take in a [`KeyListener`](https://docs.oracle.com/javase/8/docs/api/java/awt/event/KeyListener.html) as well as an `ActionListener`. A `KeyListener` is analogous to a `ActionListener`, but as the name suggests, it listens for keyboard-related events. There are *three* such events: when a key is pressed, when a key is typed, and when a key is released. Pressing and holding down a key for a while will typically generate one key-pressed event, several key-typed events, and one key-released event. Just as `ActionListener`s accept `ActionEvent`s, `KeyListener`s accept [`KeyEvent`s](https://docs.oracle.com/javase/8/docs/api/java/awt/event/KeyEvent.html) containing information about which key was involved. We’ll use the `keyTyped` event to toggle the color of the text, use the `keyPressed` event to capitalize the text, and use the `keyReleased` event to un-capitalize the text.

For now, we’ll simply have our controller implement the `KeyListener` interface also, and pass itself along as the second argument to `view.setListeners`. Again, note that the view doesn’t know or care that the exact same object is being passed in as the two distinct listeners: the types ensure that it doesn’t matter. (**Note:** And again, this is overly simplified, and we ought to have a distinct class implement this `KeyListener` interface, rather than have the `Controller` class do everything itself.)

To implement the color changing, we’ll need to add a method to our view interface to toggle the color of the text. This is intrinsically a view-specific thing, since the controller cannot know exactly how the text is displayed or which control it needs to change color. (That would leak internal implementation details of the view, and in any case, the controller only knows it has an `IView` rather than a particular view class.)

To implement the capitalization, note that we *do not* actually mutate the model! This is both a good thing and a necessary thing: suppose the model text contained a mixture of upper- and lower-case letters. If we mutated the model and capitalized everything, then we would not be able to undo that change later. Instead, we ask the model for its content, and inform the view that it should display a capitalized version of the that content. (This view-only change is analogous to “zooming in” while editing a picture in Photoshop or some other image editor: the view is technically displaying only a subset of the pixels of the document, and moreover is displaying them at far more than one screen pixel per document pixel! If “zooming in” actually mutated the document, then we’d lose information and be unable to “zoom out” again.)

## 7. Aside 1: Low-level and high-level events

Within the `KeyListener` interface, there is a qualitative difference between the key-pressed and key-released events, and the key-typed event. Individual key events are incredibly, tediously low-level. Just trying to type a capital `'A'` generates *five* events: the Shift key was pressed; the A key was pressed; the letter `'A'` was typed; the A key was released; the Shift key was released. (The last two events might happen in either order, depending on which key was released first.) Notice that only one key-typed event occurred, though, and it contained exactly the text that was typed.

If we had to deduce which keys were typed, merely from the key-pressed and key-released events, we’d quickly lose track. Java (and most GUI toolkits) thankfully translate those sequences into higher-level key-typed events. And this translation has an addtional benefit: consider typing non-English text on a typical QWERTY keyboard. We clearly need to type mutliple physical keys to produce one logical character (this is sometimes known as “chord” input, by analogy with pressing multiple keys on a piano keyboard), and this translation lets us ignore the individual key-pressed and key-released events if we only want to consider what text was typed.

On the other hand, if we want to keep track of which keys are pressed (e.g. to control a player’s motion while a key is held down), we need to resort to the lower-level events.

This low-level/high-level distinction is not clearly defined, and depends on perspective. Would we consider `ActionEvent`s to be low-level or high-level? On the one hand, they’re clearly much *higher-level* than individual [`MouseEvent`s](https://docs.oracle.com/javase/8/docs/api/java/awt/event/MouseEvent.html), which are analogous to `KeyEvent`s and indicate when a mouse button is pressed, released, or clicked, or when it enters or exits some area. Indeed, `JButton`s register themselves as `MouseListener`s, and translate the relevant mouse-clicked event into an `ActionEvent`! (They also register themselves as `KeyListener`s, and generate `ActionEvent`s when the Enter key is pressed.) But at the same time, the *user* of our view might not care which particular buttons we happened to use to implement the view, and there might well be multiple buttons that trigger identical actions: from that perspective, action events are too *low-level* and should be implementation details hidden behind some abstraction barrier.

Designing a view and controller properly requires considering what level of detail we want to expose in the events that the view forwards to the controller. Our current designs expose far too low-level detail: “something happened with the following action command”, or “some key was pressed/typed/released”. These events are very general, and have no specific semantics for our application. Let’s consider the different enhancements we can make, using either low-level or high-level events. We’ll find that we might want to translate generic low-level events into application-specific high-level ones.

## 8. Stage 4: Making the controller more flexible using low-level events

Many applications run on multiple systems (e.g. Windows, Mac and Linux), and have hotkeys to perform various common actions — but the exact hotkey differs on each platform. It would be a shame to have to recompile the code in order to support these different keys. Similarly, many applications allow the user to customize the hotkeys that control the application. Here, it’s outright impossible for users to recompile the program to customize its behavior! Our next generalization aims to alleviate this lack of flexibility.

Our prior attempt hard-coded the keys in the various key event-listeners. In the KeyboardMaps directory, we generalize this so that we can reconfigure hotkeys at runtime. To accomplish this, we design a new `KeyListener` implementation that uses dictionaries of `Runnable`s instead of `switch` statements in its event handlers. Specifically, our `KeyboardListener` will contain a `Map<Integer, Runnable>` dictionary for its key-pressed event handler, another such dictionary for its key-released handler, and a `Map<Character, Runnable>` dictionary for its key-typed handler. (These `Runnable`s are examples of the command pattern, which we talked about several lectures ago.)

The handlers are pleasingly straightforward:

\```java
// In the KeyboardListener class
@Override
public void keyTyped(KeyEvent e) {
  if (keyTypedMap.containsKey(e.getKeyChar()))
    keyTypedMap.get(e.getKeyChar()).run();
}

// analogously for the other two events
\```

Because the dictionaries are data, we can mutate them at runtime if we so choose, and therefore change which keys are mapped to which responses. (For variety’s sake, we show three different syntaxes for creating `Runnable`s: explicit classes, anonymous classes, and lambda expressions.)

\```java
// In the Controller class
  private void configureKeyBoardListener() {
    Map<Character, Runnable> keyTypes = new HashMap<>();
    Map<Integer, Runnable> keyPresses = new HashMap<>();
    Map<Integer, Runnable> keyReleases = new HashMap<>();

    // Uses an explicit function-object class to provide the implementation
    keyReleases.put(KeyEvent.VK_C, new MakeOriginalCase());
    // Uses an anonymous object to provide the implementation
    keyPresses.put(KeyEvent.VK_C, new Runnable() {
      public void run() {
        String text = model.getString();
        text = text.toUpperCase();
        view.setEchoOutput(text);
      }
    });
    // Uses lambda-syntax to provide the implementation
    keyTypes.put('r', () -> { view.toggleColor(); });

    KeyboardListener kbd = new KeyboardListener();
    kbd.setKeyTypedMap(keyTypes);
    kbd.setKeyPressedMap(keyPresses);
    kbd.setKeyReleasedMap(keyReleases);

    this.view.addKeyListener(kbd);
  }
\```

(In the same manner as this `KeyboardListener`, our implementation also generalizes the `ActionListener` implementation into a dictionary that maps action commands to `Runnable`s.)

This transformation, which converts *explicit control flow* (the `switch` statements we had earlier) into *data* (the keys of the `Map`) is a very common one in programming. We’ve clearly improved things somewhat, but we’re not finished: after all, if we hard-code the keys of the `Map` (as we did in the calls to `keyPresses.put` above), we haven’t really fixed anything, right? Fortunately, we know a way around this: by using a combination of a *reader* and *builder*, we could read in a “user preferences file” to figure out what keys to put in the maps, and then our code is completely agnostic to exactly which keys are needed for which handlers.

## 9. Stage 5: Decoupling the view from the controller using high-level events

The previous generalization relied on the view exposing its low-level events to the controller. However, we might reasonably want to trigger the same behavior from multiple UI controls. In the GeneralCommandCallbacks directory, we take this approach: our view can toggle the color of the text either via a button, or via typing the `'t'` key. (This is a simplified example, but is a stand-in for typical toolbar buttons doing the same thing as hotkey shortcuts.)

The key innovation in this design is that we’ve eliminated the `ActionListener`s and `KeyListener`s from the controller and *also* from the `IView` interface. Instead, we have a new `addFeatures` method that takes in a new interface, `Features`, whose methods are the various high-level features and abilities of our view. Our *prior* interfaces exposed low-level events saying, for instance, “Hey, a button with this action command has been clicked; what should be done?” These *new* callbacks say, for example, “The user has requested to make the display uppercase; what should be done?” This interface is bigger than the `ActionListener` interface, but it’s also much more application-specific, and it advertises exactly the responsibilities a controller has to uphold for this view. It also successfully encapsulates the action commands that we leaked in prior designs: the view is now free to change those commands without breaking the controller at all.

This design is quite elegant, and does the best job of loosening the coupling between the view and the controller: by encapsulating the details of which physical controls do what, the view is much more abstracted away, and the logical interface that it presents to the controller is much more application-specific. Note that the `Controller` class and the `Features` interface know absolutely nothing about Swing: they don’t even `import` the packages! Just like our model doesn’t need to know about how it’s being displayed, so too our controller doesn’t really need to know how the views are implemented. When possible, aspire to interfaces like this one, but be prepared to fall back to lower-level events when necessary.

**Note:** It might seem odd that the `toggleColor` method is both a callback on the `Features` interface *and* a method on the `IView` interface — why can’t the view handle this internally? Indeed, it possibly could! (And in some circumstances, the view definitely *should* handle some events entirely internally: for instance, when implementing a text editor, the view should probably internally handle the sequence of low-level events that indicate the user has selected a stretch of text. Once the user does something with that text — deletes it, replaces it, copies it, etc. — the view can raise a semantically relevant high-level event with the selected content.) But consider a “bigger” version of our current program, where we have *two* views that we want to keep synchronized: if either of them has toggled its color, both should toggle their colors together. The only way to ensure this synchronization is for the view to forward the event to the controller, which can in turn decide to tell *both* views how to update themselves.

**Note:** Once again, in the sample code and in the snippets below, we write that the `Controller` `implements` `Features` directly: we use an is-a relationship. A better approach is to use a has-a relationship, and have a dedicated object that implements the `Features` interface instead. We omit this variant here, because there are enough other details to focus on right now!

## 10. Aside 2: Designing a Features interface

In the previous section we introduced a `Features` interface, that hid the *Swing*-specific event listeners and instead exposed *application*-specific events. But how are we to know what sort of application-specific events we should have? It’s difficult to give a one-size-fits-all answer here, since by definition this will be rather application-specific. Instead, we can articulate some guidelines to follow:

- Avoid any view-specific classes in the `Features` interface wherever possible. Above, we said to eliminate any mention of Swing-specific events, and generalized it further so that the controller did not need to depend on the Swing library at all. We can easily come up with a plausible counterexample to this generality: suppose we were building a drawing program, and the view allows the user to choose a color to draw with. Surely the `Features` interface should expose the `java.awt.Color` that the user picked? In this case, though, the *model* also depends on `java.awt.Color`, and so the view isn’t introducing any new dependencies. If the model chose a different class to represent its colors, then the `Features` interface ought to expose *that*, rather than the Swing color directly.
- Treat the methods in the `Features` interface as *requests from the user*. In particular, a view might allow a user to attempt various editing operations that the controller might prohibit, or that the model might reject as invalid. In our example above, “requesting an uppercase display” fits into this mindset. Additionally, brainstorming “what might the user try to do?” can help articulate all the possible features a user might want from the program, which in turn can help design the `Features` methods needed.
- Not all view-specific events need to turn into `Features` requests. However, events that never make it to the controller are therefore intrinsically uncontrollable. In sophisticated GUIs, a single controller might need to synchronize multiple views: for instance, a [split-screen text editor](https://camo.githubusercontent.com/c535bd502fea4873724e2bebc144d3e2f4fe075e/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f32352f3131393038312f37333938343237612d366339362d313165322d393464632d3839363462333237333131332e706e67) could have two views of the same file, whose contents should be changed in tandem. A [video editor](https://helpx.adobe.com/content/dam/help/en/after-effects/how-to/camera-animation/jcr_content/main-pars/image_1685031719/camera-animation_step2.jpg) might have a timeline view at the bottom of the screen, as well as controls for the effects and a preview window, all of which must stay consistent. A [spreadsheet](https://www.exceldashboardtemplates.com/wp-content/uploads/2017/05/Copy-an-Excel-Chart-on-Same-Worksheet-Keeps-Same-Data-Reference-Final-Copied-Charts.png) might have a grid showing many cells of data, a textbox to edit a single cell, and a graph of multiple cells’ data, again which all must stay consistent. When implementing event handlers inside a particular view, consider whether the change being handled might need to be synchronized with multiple views: if so, then it should be raised as a `Features` request. If not, then it *might* be entirely handled within the view. For instance, scrolling a single text file might not need to inform the controller that the file has been scrolled, and so scrolling could be handled entirely within the view. On the other hand, a [diff viewer](https://www.git-tower.com/blog/media/pages/posts/diff-tools-windows/037ea85d83-1690885042/meld.png) that compares two files might wnat to scroll both files in unison, and so any scroll changes would need to be raised to the controller’s attention so that it can synchronize both views.
- When a `Features` event is raised to the controller’s attention, the view *probably* shouldn’t mutate itself, but rather wait for the controller to tell it to do so — this is in keeping with thinking of features as requests rather than demands. We noted this above, where `toggleColor` was both a method in the `Features` interface and also a method on the view, and the controller’s implementation of the `toggleColor` method turned around and called the view’s method, and we said this might seem overly roundabout. We gave one example where this was needed for synchronization of multiple views. Another might be triggering some resource-limited effect (where the resource might be tracked by the model, like in-game bonuses, or the resource might be controller-specific, like live-streaming a video of a gameplay). The view shouldn’t modify itself until the controller (and possibly model too) has confirmed that the request can go through.
- Any event that is handled entirely within the view is intrinsically more difficult to test. We would have to synthesize the low-level UI events, which may be impractical or even impossible to do sufficiently. By decoupling the particular UI event that triggers behavior from the `Features` implementation that actually provides the behavior, we limit the hard-to-test code to just the “wiring” between the event listeners and the `Features` object. Since all the interesting behavior is now in the `Features` object, and since its methods depend only on application-specific concepts and types, we can easily create a mock view that triggers `Features` methods without needing the actual Swing events. This allows for test cases analogous to those we saw in [Lecture 8](https://course.ccs.neu.edu/cs3500/lec_controllers_mocks_notes.html), with all the benefits they bring.

## 11. Stage 6: Further enhancements using `InputMap`s and `ActionMap`s

Our last revision eliminated the flexibility of dynamically changing hotkeys and reverted to hard-coding the keys in the view’s implementation of its own key listener. Combining the flexibility of the `KeyboardListener` and its dictionaries, with the high-level events of the `Features` interface, is aesthetically tricky: who should control which keys do what? In some sense, it almost feels like the choice should be made not by our current controller, which is controlling a particular model and view, but rather to some hypothetical “application controller”, that controls the overall application. We’ve already encountered this in practice: in IntelliJ, there are both project-specific settings and application-wide settings, and different dialogs control those different features.

Additionally, implementing the keyboard-listening dictionaries is tedious: surely this functionality could be implemented once and for all, and we wouldn’t need to redo it in every single application?

The solution, once again, is a layer of indirection. We’ve seen above that Swing components have a notion of an *action command*, and that we can cause code to run depending on which action was triggered. Combining several of these actions together should seem reminiscent of the `KeyboardListener` dictionaries we just built. In fact, Swing has a concept of an [`ActionMap`](https://docs.oracle.com/javase/8/docs/api/javax/swing/ActionMap.html), which is essentially just such a dictionary from action commands to actions.[1](https://course.ccs.neu.edu/cs3500/lec_gui_basics_notes.html#(counter-()._(gentag._23._lecturegui_basics))) An `Action` in Swing has many potential subclasses; we’ll focus on the `AbstractAction` class, which we can subclass ourselves to create new action handlers. For instance, we might write

\```java
Action makeOriginalCase = new AbstractAction() {
  public void actionPerformed(ActionEvent e) {
    String text = model.getString();
    view.setEchoOutput(text);
  }
};
Action makeCaps = new AbstractAction() {
  public void actionPerformed(ActionEvent e) {
    String text = model.getString();
    text = text.toUpperCase();
    view.setEchoOutput(text);
  }
};
Action toggleColor = new AbstractAction() {
  public void actionPerformed(ActionEvent e) {
    view.toggleColor();
  }
};
\```

This is all well and good, and now we have yet one more way of representing runnable bits of code, but how should we actually associate these actions with their keyboard triggers? First, we associate these `Action`s with their action commands:

\```java
// Somewhere in our View class:

aComponent.getActionMap().put("restoreLowercase", makeOriginalCase);
aComponent.getActionMap().put("makeCaps", makeCaps);
aComponent.getActionMap().put("toggleColor", toggleColor);
\```

We then need the second piece of the indirection: an [`InputMap`](https://docs.oracle.com/javase/8/docs/api/javax/swing/InputMap.html). `InputMap`s associate [`KeyStroke`s](https://docs.oracle.com/javase/8/docs/api/javax/swing/KeyStroke.html) with action commands. A `KeyStroke` describes our key-press, key-release, and key-type low-level events in a uniform manner. When a low-level key event matches something in an `InputMap`, the associated action command is looked up in the `ActionMap` and fired. So we can continue our code as follows:

\```java
// Somewhere in our View class:

// Use simplest constructor to describe a key-press
aComponent.getInputMap().put(KeyStroke.getKeyStroke(KeyEvent.VK_C), "makeCaps");
// Use another constructor to describe key-releases
aComponent.getInputMap().put(KeyStroke.getKeyStroke(KeyEvent.VK_C, true), "restoreLowercase");
// Yet another constructor lets us describe key-typed events
aComponent.getInputMap().put(KeyStroke.getKeyStroke("typed r"), "toggleColor");
\```

**Note:** `InputMap`s and `ActionMap`s apply only to `JComponent`s, and not to `JFrame`s directly. However, we can easily add a component to our frame for the sole purpose of handling key events, and we [can specify](https://docs.oracle.com/javase/tutorial/uiswing/misc/keybinding.html) that its `InputMap` be used whenever the frame has focus at all.

This seems like a lot of machinery to introduce, and it would be unwieldy if it weren’t so reusable. The critical design patterns here are:

- We have a mechanism for translating low-level (`KeyEvent`s) into mid-level action commands.
- We have transformed control flow (of what code to run based on what key was pressed) into data (a map of `KeyStroke`s).
- We have a mechanism from translating mid-level action commands into actual runnable actions.

The code still suffers from one problem: the `Action`s themselves feel like they belong in the controller (since they refer to `model` and `view`), but are referenced directly in the view (in the `getActionMap().put(...)` lines). We can combine these maps with our `Features` design, to get one final translation from mid-level action commands to high-level events:

\```java
// NOTE: this class makes no mention of Actions or Controllers.
public class JFrameView extends JFrame implements IView {
  KeyComponent keyComponent;

  public JFrameView(String caption) {
    super(caption);
    ...
    this.keyComponent = new KeyComponent();
    this.add(keyComponent);
  }

  public void setHotKey(KeyStroke key, String featureName) {
    this.keyComponent.getInputMap().put(key, featureName);
  }

  public void addFeatures(Features features) {
    this.keyComponent.addFeatures(features);
  }
}

// NOTE: Neither does this class!  It only refers to Features.
class KeyComponent extends JPanel {
  List<Features> featureListeners = new ArrayList<>();

  // Includes this new feature listener in responding to keys
  void addFeatures(Features f) { this.featureListeners.add(f); }

  KeyComponent() {
    // Install action command -> Feature callback associations
    this.getActionMap().put("makeCaps", new AbstractAction() {
      public void actionPerformed(ActionEvent e) {
        for (Features f : featureListeners)
          f.makeUppercase();
      }
    });
    this.getActionMap().put("restoreLowercase", new AbstractAction() {
      public void actionPerformed(ActionEvent e) {
        for (Features f : featureListeners)
          f.restoreLowercase();
      }
    });
    this.getActionMap().put("toggleColor", new AbstractAction() {
      public void actionPerformed(ActionEvent e) {
        for (Features f : featureListeners)
          f.toggleColor();
      }
    });
    ...
  }
}

// NOTE: Only the Controller needs to know how to implement Features.
public class Controller implements Features {
  private IModel model;
  private IView view;

  ...

  // These are the high-level event handlers we care about:
  @Override
  public void toggleColor() {
    view.toggleColor();
  }

  @Override
  public void makeUppercase() {
    String text = model.getString();
    text = text.toUpperCase();
    view.setEchoOutput(text);
  }

  @Override
  public void restoreLowercase() {
    String text = model.getString();
    view.setEchoOutput(text);
  }

  // This attaches this controller as our features listener
  public void setView(IView v) {
    this.view = v;
    view.addFeatures(this);

    // Choose the keys we want
    view.setHotKey(KeyStroke.getKeyStroke("pressed c"), "makeCaps");
    view.setHotKey(KeyStroke.getKeyStroke("released c"), "restoreLowercase");
    view.setHotKey(KeyStroke.getKeyStroke("typed r"), "toggleColor");
  }

  ...
}

\```

## 12. Exercises

At the top of this lecture are starter files for a GUI version of the Turtles example we worked through in [Lecture 10](https://course.ccs.neu.edu/cs3500/lec_commands_notes.html). The `TurtleGraphicsView` does not currently do anything. Enhance this code with a new `TurtlePanel` class that `extends JPanel`, and override its `paintComponent` method to draw whatever you want, just to confirm that it works.

Next, enhance the `IView` interface so you can pass the relevant information from the model, through the controller, into the view and into your `TurtlePanel` class. Once you’ve connected the pieces, use this information in your `paintComponent` implementation to draw the turtle’s trace.

The links at the top of the lecture include a “solution” implementation; do not to look at that until you’ve tried to implement this yourself.

The `IView` interface contains one method for setting up an event listener. What is its signature? Does it seem like a high-level event to you, or a low-level one? If you think it’s too low-level, can you think of a better, higher-level signature to use? If you think it’s sufficiently high-level, why do you think so?



1`Action`s themselves are more generally useful in Swing than just for keyboard interaction, but we’ll focus on just the keyboard part here.
```



:::



## 1. 主要内容

1. **Model**： 负责存储和封装数据逻辑；
2. **View**： 负责展示数据，可以是文本界面，也可以是图形界面；
3. **Controller**： 负责协调用户输入与对 Model 的操作，并通知 View 做出相应更新；

我们会先展示一个**文本界面**版本，随后演示如何切换到**图形界面**（GUI），以及如何一步步改进、解耦视图和控制器、处理键盘事件等。

## Stage 1: 实现基础 Model

### 1. Model 接口

- **代码名称**： `IModel.java`
- **功能**： 定义了一个最简单的模型接口，只有 `get/set` 字符串的方法，供后续 view 和 Controller 调用。

```java
public interface IModel {
  /**
   * 获取当前存储的字符串
   * @return 模型中的字符串
   */
  String getString();

  /**
   * 设置新的字符串
   * @param str 要设置的新字符串
   */
  void setString(String str);
}
```

**代码逐行注释**：

1. `public interface IModel { ... }`：定义一个接口，命名为 `IModel`。
2. `String getString();`：声明一个方法用于读取当前字符串。
3. `void setString(String str);`：声明一个方法用于更新当前字符串。

### 2. Model 类

- **代码名称**：`Model.java`

- **功能**：`IModel` 接口的具体实现，内部用一个 `String` 来存储数据。

```java
public class Model implements IModel {
  private String data;

  /**
   * 构造函数，初始化字符串为空或给定初值
   */
  public Model() {
    this.data = "";
  }

  @Override
  public String getString() {
    return this.data;
  }

  @Override
  public void setString(String str) {
    this.data = str;
  }
}
```

**代码逐行注释**：

1. `public class Model implements IModel`：类 `Model` 实现了 `IModel` 接口。
2. `private String data;`：私有字段 `data` 用于实际存储字符串内容。
3. `public Model()`：构造函数，将 `data` 初始化为空字符串（当然也可改为接受一个初始值）。
4. `public String getString()`：实现接口方法，返回当前存储的字符串。
5. `public void setString(String str)`：实现接口方法，修改存储的字符串。

## Stage 2: 实现文本方式的 View

### 1. IView 接口

- **代码名称**：`IView.java`

- **功能**：定义了一个最简单的视图接口，能够显示信息，以及（可选）展示错误消息等。这里只做最基本的打印操作。

```java
public interface IView {
  /**
   * 显示给用户看的输出
   * @param message 要显示的内容
   */
  void showMessage(String message);

  /**
   * 显示错误信息
   * @param error 要显示的错误信息
   */
  void showError(String error);
}
```

**代码逐行注释**：

1. `public interface IView { ... }`：定义视图接口 `IView`。
2. `void showMessage(String message);`：向用户显示普通文本消息。
3. `void showError(String error);`：向用户显示错误信息或提示。

### 2. TextView 类

- **代码名称**：`TextView.java`
- **功能**：`IView` 的具体实现，把消息打印到给定的输出流（如控制台）。

```java
import java.io.PrintStream;

public class TextView implements IView {
  private final PrintStream out;

  /**
   * 构造函数
   * @param out 指定要输出的流，比如 System.out
   */
  public TextView(PrintStream out) {
    this.out = out;
  }

  @Override
  public void showMessage(String message) {
    out.println(message);
  }

  @Override
  public void showError(String error) {
    out.println("ERROR: " + error);
  }
}
```

**代码逐行注释**：

1. `private final PrintStream out;`：用来存放输出流（比如 `System.out`，也可以是测试时的假输出）。
2. 构造函数：接受一个 `PrintStream out` 并保存，方便后续统一打印。
3. `showMessage`：实现接口方法，直接打印普通信息。
4. `showError`：实现接口方法，在打印时加上 `"ERROR: "` 前缀以示区别。

## Stage 3: 实现文本方式的 Controller

### 1. IController 接口

- **代码名称**：`IController.java`
- **功能**：定义了控制器的最小接口，即一个 `start()` 方法，开始接管程序流程。

```java
public interface IController {
  /**
   * 开始执行程序逻辑
   */
  void start();
}
```

### 2. TextController 类

- **代码名称**：`TextController.java`
- **功能**：文本控制器的实现，结合 `IModel`、`IView` 以及用户输入（通过 Scanner 读取）。循环读取用户命令，进行相应处理。

```java
import java.util.Scanner;

public class TextController implements IController {
  private final IModel model;
  private final IView view;
  private final Scanner sc;

  /**
   * 构造函数
   * @param model 模型
   * @param view  视图
   * @param sc    用于读取用户输入的扫描器
   */
  public TextController(IModel model, IView view, Scanner sc) {
    this.model = model;
    this.view = view;
    this.sc = sc;
  }

  @Override
  public void start() {
    view.showMessage("欢迎使用文本版程序！");
    boolean running = true;
    while (running) {
      view.showMessage("请输入操作：\n" +
                       "1: 查看当前字符串\n" +
                       "2: 设置新的字符串\n" +
                       "q: 退出程序");
      String input = sc.nextLine().trim();
      switch (input) {
        case "1": // 查看当前字符串
          String current = model.getString();
          view.showMessage("当前字符串为: " + current);
          break;
        case "2": // 设置新的字符串
          view.showMessage("请输入新字符串：");
          String newVal = sc.nextLine();
          model.setString(newVal);
          view.showMessage("已更新字符串！");
          break;
        case "q": // 退出
          running = false;
          view.showMessage("程序已退出。");
          break;
        default:
          view.showError("未知命令，请重新输入。");
      }
    }
  }
}
```

**代码逐行注释**：

1. 定义了 `model`, `view`, `sc` 三个私有字段，分别负责模型、视图和输入。
2. `public TextController(IModel model, IView view, Scanner sc)`：构造函数中注入这三者。
3. `start()`：核心方法，用 `while` 循环反复让用户输入命令。
4. 根据用户输入的内容（`switch (input)`）来做不同的操作：
    - `"1"`：读取并打印当前字符串
    - `"2"`：让用户输入新的字符串并更新到模型中
    - `"q"`：退出循环并结束程序
    - 其他：打印错误提示

## Stage 4: 测试并运行文本版 MVC

- **代码名称**：`MainText.java`（示例主类）
- **功能**：演示如何搭建并运行我们的文本版 MVC。

```java
import java.util.Scanner;

public class MainText {
  public static void main(String[] args) {
    IModel model = new Model();                 // 创建模型
    IView view = new TextView(System.out);      // 创建文本视图，输出到控制台
    Scanner sc = new Scanner(System.in);        // 创建扫描器读取用户输入

    IController controller = new TextController(model, view, sc);
    controller.start();                         // 启动文本版程序
  }
}
```

**代码逐行注释**：

1. `IModel model = new Model();`：实例化我们刚才写的 `Model`。
2. `IView view = new TextView(System.out);`：文本视图使用 `System.out` 输出到控制台。
3. `Scanner sc = new Scanner(System.in);`：从控制台读取用户输入。
4. `IController controller = new TextController(model, view, sc);`：组装 MVC 三要素。
5. `controller.start();`：启动控制器，程序进入循环运行。

运行该 `main` 方法后，您可以在控制台依照提示输入指令来操作模型的字符串。

## Stage 5: 初识 GUI（不太好的写法示例）

下面我们开始引入图形界面（GUI）。先做一个“坏设计但能运行”的简单版本，让大家看到最基本的 Swing 用法。这个版本会让“视图”直接持有并修改 `Model`，从而破坏了 MVC 的解耦原则，但能让我们先快速见识到 Swing 编程的主要元素：`JFrame`, `JLabel`, `JButton`, `JTextField` 等。

### 1. 简易的 GUI View（不推荐写法）

- **代码名称**：`JFrameView.java`
- **功能**：创建一个窗口 (`JFrame`)，里面含有一个输入框、两个按钮和一个标签；当点击按钮时，直接操作 `Model`。

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class JFrameView extends JFrame implements ActionListener {
  private final IModel model;
  private final JLabel display;      // 用于显示文本
  private final JTextField input;    // 用户输入的文本框
  private final JButton echoButton;  // Echo 按钮
  private final JButton exitButton;  // Exit 按钮

  public JFrameView(String caption, IModel model) {
    super(caption);
    this.model = model;
    this.setLayout(new FlowLayout());

    // Label
    display = new JLabel("初始状态");
    this.add(display);

    // TextField
    input = new JTextField(10); // 宽度10列
    this.add(input);

    // Echo 按钮
    echoButton = new JButton("Echo");
    echoButton.setActionCommand("Echo Button");
    echoButton.addActionListener(this);   // 直接由自己处理监听
    this.add(echoButton);

    // Exit 按钮
    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    exitButton.addActionListener(this);
    this.add(exitButton);

    this.pack();           // 让布局生效
    this.setVisible(true); // 显示窗口
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "Echo Button":
        // 直接修改 model
        model.setString(input.getText());
        display.setText(model.getString());
        break;
      case "Exit Button":
        System.exit(0);
        break;
      default:
        // do nothing
    }
  }
}
```

**代码逐行注释**：

1. `extends JFrame implements ActionListener`：让类本身既是一个窗口，又直接处理按钮点击事件。
2. `this.setLayout(new FlowLayout());`：使用流式布局，让控件依次放置。
3. 创建 `JLabel`, `JTextField`, 两个 `JButton`，并将它们添加到框架中。
4. `echoButton.setActionCommand("Echo Button");`：设置按钮的“命令字符串”，后面在 `actionPerformed` 里区分。
5. `echoButton.addActionListener(this);`：将当前对象本身作为监听器。
6. 在 `actionPerformed` 中，通过 `switch` 判断是哪个按钮被点击：
    - `"Echo Button"`：把输入框的内容写入模型，再将模型里的新值更新到标签显示。
    - `"Exit Button"`：退出程序。

### 2. 启动这个不推荐的 GUI

- **代码名称**：`MainBadGUI.java`

```java
public class MainBadGUI {
  public static void main(String[] args) {
    IModel model = new Model();
    // 直接把 Model 传给 View，违反了解耦原则，但可用
    JFrameView view = new JFrameView("Bad GUI Demo", model);
  }
}
```

这样就能弹出一个窗口，点击 Echo 会直接改模型，点击 Exit 会关闭程序。

## Stage 6: 解耦 View 与 Model

为了让我们的 MVC 架构更清晰，我们希望视图**不要**直接调用 `model.setString`。而是把对模型的修改统一交给 Controller 来处理。

思路：

1. **View** 不再持有 `model`；只提供获取文本、显示文本等方法。
2. **Controller** 拥有 `model` 和 `view`，并把自己注册给 `view`，让 `view` 把事件再转给 `controller`。

::: code-tabs

@tab 1. 新的 IView

我们只给视图保留一些“与显示相关”的方法，让视图**不能**修改模型：

```java
import java.awt.event.ActionListener;

public interface IView {
  /**
   * 返回用户在文本框中输入的字符串
   */
  String getInputString();

  /**
   * 清空文本框
   */
  void clearInputString();

  /**
   * 在界面上显示一个字符串（比如更新某个 label）
   * @param s 要显示的内容
   */
  void setEchoOutput(String s);

  /**
   * 显示窗口
   */
  void display();

  /**
   * 提供给外部设置按钮监听器
   * @param listener 控制器传入的 ActionListener
   */
  void setListener(ActionListener listener);
}
```

@tab 2. 新的 JFrameView

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;

public class JFrameView extends JFrame implements IView {
  private final JLabel display;
  private final JTextField input;
  private final JButton echoButton;
  private final JButton exitButton;

  public JFrameView(String caption) {
    super(caption);
    this.setLayout(new FlowLayout());

    // 不再持有 IModel
    display = new JLabel("初始状态");
    this.add(display);

    input = new JTextField(10);
    this.add(input);

    echoButton = new JButton("Echo");
    echoButton.setActionCommand("Echo Button");
    this.add(echoButton);

    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    this.add(exitButton);

    this.pack();
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  @Override
  public String getInputString() {
    return input.getText();
  }

  @Override
  public void clearInputString() {
    input.setText("");
  }

  @Override
  public void setEchoOutput(String s) {
    display.setText(s);
  }

  @Override
  public void display() {
    this.setVisible(true);
  }

  @Override
  public void setListener(ActionListener listener) {
    // 由外部传入的监听器统一处理
    echoButton.addActionListener(listener);
    exitButton.addActionListener(listener);
  }
}
```

@tab 3. Controller

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Controller implements ActionListener {
  private final IModel model;
  private final IView view;

  public Controller(IModel m, IView v) {
    this.model = m;
    this.view = v;
    // 让视图把事件都交给当前这个对象
    this.view.setListener(this);
  }

  public void start() {
    // 显示视图
    view.display();
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "Echo Button":
        // 从视图拿到用户输入，更新到模型，再让视图显示
        String input = view.getInputString();
        model.setString(input);
        view.setEchoOutput(model.getString());
        // 也可选择清空输入框
        view.clearInputString();
        break;
      case "Exit Button":
        System.exit(0);
        break;
      default:
        // do nothing
    }
  }
}
```

@tab 主类运行

```java
public class MainGoodGUI {
  public static void main(String[] args) {
    IModel model = new Model();
    IView view = new JFrameView("Good GUI Demo");
    Controller controller = new Controller(model, view);
    controller.start();
  }
}
```

:::

**Controller 说明**：

- 现在 `JFrameView` 不再直接操作 `model`，而是把按钮的点击事件通过 `ActionListener` 转给 `Controller`。

- `Controller` 持有 `model`，因此可以安全地进行 `model.setString(...)`，然后再告诉 `view` 更新界面。

### 1. 报错解决方案

回顾我们在**文本版**和**图形版**的示例时，会发现两套 `IView`/`View` 的接口和实现不同：

- **文本版 IView** 通常会有 `showMessage(...)`、`showError(...)` 方法。
- **图形版 IView** 在最简化的设计中，只有比如 `getInputString()`、`clearInputString()`、`setEchoOutput()`、`display()` 等方法，可能**并未**包含 `showMessage(...)`。

如果你的**控制器**里还保留了对 `view.showMessage(...)` 的调用（大概率是从文本版代码沿用过来的），那就会和新的图形版 `IView` 接口冲突，编译时报错。

### 2. 解决思路

#### 2.1 方案 1：在图形版 `IView` 中补充 `showMessage(...)` 方法

::: code-tabs

@tab 1. 更新后的 IView 接口

```java {32-42}
import java.awt.event.ActionListener;

public interface IView {

  /**
   * 返回用户在文本框中输入的字符串
   */
  String getInputString();

  /**
   * 清空文本框
   */
  void clearInputString();

  /**
   * 在界面上显示一个字符串（例如更新某个标签）
   * @param s 要显示的内容
   */
  void setEchoOutput(String s);

  /**
   * 在窗口上显示该视图
   */
  void display();

  /**
   * 提供给外部设置按钮监听器（通常是控制器）
   * @param listener 控制器传入的 ActionListener
   */
  void setListener(ActionListener listener);

  /**
   * 在界面上显示一条普通信息（弹窗或标签等）
   * @param msg 要显示的内容
   */
  void showMessage(String msg);

  /**
   * 在界面上显示一条错误信息（弹窗或标签等）
   * @param err 要显示的错误内容
   */
  void showError(String err);
}
```

@tab 2. 更新后的 JFrameView 实现

```java {60-72}
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;

public class JFrameView extends JFrame implements IView {
  private final JLabel display;      // 用于显示字符串的标签
  private final JTextField input;    // 用户输入的文本框
  private final JButton echoButton;  // Echo 按钮
  private final JButton exitButton;  // Exit 按钮

  public JFrameView(String caption) {
    super(caption);
    this.setLayout(new FlowLayout());

    // 初始化界面组件
    display = new JLabel("初始状态");
    this.add(display);

    input = new JTextField(10);
    this.add(input);

    echoButton = new JButton("Echo");
    echoButton.setActionCommand("Echo Button");
    this.add(echoButton);

    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    this.add(exitButton);

    this.pack();
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  @Override
  public String getInputString() {
    return input.getText();
  }

  @Override
  public void clearInputString() {
    input.setText("");
  }

  @Override
  public void setEchoOutput(String s) {
    display.setText(s);
  }

  @Override
  public void display() {
    this.setVisible(true);
  }

  @Override
  public void setListener(ActionListener listener) {
    echoButton.addActionListener(listener);
    exitButton.addActionListener(listener);
  }

  @Override
  public void showMessage(String msg) {
    // 通过对话框（MessageDialog）显示普通消息
    JOptionPane.showMessageDialog(this, msg, "Message",
                                  JOptionPane.INFORMATION_MESSAGE);
  }

  @Override
  public void showError(String err) {
    // 通过对话框（MessageDialog）显示错误消息
    JOptionPane.showMessageDialog(this, err, "Error",
                                  JOptionPane.ERROR_MESSAGE);
  }
}
```

@tab 3. 控制器调用示例（如有需要）

```java
// 如果你的控制器中需要调用：
view.showMessage("操作成功！");

// 或者
view.showError("出现了一些错误！");
```

@tab Message

```java
// 只要控制器持有的是这个更新后的 IView 接口对象，并且底层是用 JFrameView 来实例化，就能正常调用并看到对话框弹出。
// 例子（只展示核心片段）：
@Override
public void actionPerformed(ActionEvent e) {
  switch (e.getActionCommand()) {
    case "Echo Button":
      String inputVal = view.getInputString();
      if (inputVal.isEmpty()) {
        // 如果用户没输入内容，就调用 showError 提示
        view.showError("请输入有效的内容！");
      } else {
        model.setString(inputVal);
        view.setEchoOutput(model.getString());
        view.clearInputString();
        // 也可以调用 showMessage 表示操作成功
        view.showMessage("更新成功！");
      }
      break;
    case "Exit Button":
      System.exit(0);
      break;
    default:
      // 其他情况
      view.showError("未知命令：" + e.getActionCommand());
  }
}
```



:::

**IView 要点**：

- 新增了 `showMessage(String msg)` 和 `showError(String err)` 这两个方法。
- 其他方法（如 `getInputString()`, `setEchoOutput()` 等）保持原状。

---

**JFrameView 要点**：

- 通过 `JOptionPane.showMessageDialog(...)` 来弹出对话框显示信息。
- `showMessage(...)` 使用 `INFORMATION_MESSAGE` 图标，`showError(...)` 使用 `ERROR_MESSAGE` 图标。
- 这样一来，如果控制器中调用了 `view.showMessage("xxxxx")` 或 `view.showError("xxxxx")`，就不会再出现“找不到符号”错误，而且能在 GUI 中弹出相应的消息对话框。



### 2.2 方案 2：删除对 `view.showMessage(...)` 的调用「推荐」

如果**图形版**并不需要再以文字形式输出消息（比如不想弹对话框，也不想写到某个文本区），那就可以把**控制器**里的 `view.showMessage(...)` 相关行删掉或替换成其他逻辑。这样就不会再调用一个没有定义的方法，自然也就消除了“找不到符号”的问题。





## Stage 7: 加入键盘事件

现在我们想让用户按键盘某些按键时也能触发事件，例如：

- 按下 `'d'` 键就切换文字颜色；
- 按住 `'c'` 键时暂时把文本大写等。

### 1. 让 View 提供键盘监听接口

在 `IView` 里加入：

::: code-tabs

@tab 简单版

```java
import java.awt.event.KeyListener;

public interface IView {
  ...
  /**
   * 在视图上注册键盘监听
   * @param kbd 要注册的 KeyListener
   */
  void addKeyListener(KeyListener kbd);
}
```

@tab all-code

```java
import java.awt.event.ActionListener;
import java.awt.event.KeyListener;

/**
 * 视图接口，定义 GUI 视图所需的最基本方法。
 */
public interface IView {
  /**
   * 返回用户在文本框中输入的字符串
   */
  String getInputString();

  /**
   * 清空文本框
   */
  void clearInputString();

  /**
   * 在界面上显示一个字符串（比如更新某个 label）
   * @param s 要显示的内容
   */
  void setEchoOutput(String s);

  /**
   * 显示窗口
   */
  void display();

  /**
   * 提供给外部设置按钮监听器（用于处理按钮点击事件）
   * @param listener 控制器传入的 ActionListener
   */
  void setListener(ActionListener listener);

  /**
   * 新增：在视图上注册键盘监听
   * @param kbd 要注册的 KeyListener
   */
  void addKeyListener(KeyListener kbd);
}
```



:::

### 2. JFrameView 中实现

::: code-tabs

@tab 简单

```java
public class JFrameView extends JFrame implements IView {
  ...
  @Override
  public void addKeyListener(KeyListener kbd) {
    // 要求聚焦才能监听键盘，所以一般需要设置
    this.setFocusable(true);
    this.requestFocus();
    super.addKeyListener(kbd);
  }
  ...
}
```

@tab all-code

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.KeyListener;

/**
 * JFrame 实现的具体视图类。
 */
public class JFrameView extends JFrame implements IView {
  private final JLabel display;
  private final JTextField input;
  private final JButton echoButton;
  private final JButton exitButton;

  /**
   * 构造函数
   * @param caption 窗口标题
   */
  public JFrameView(String caption) {
    super(caption);
    this.setLayout(new FlowLayout());

    // 初始化组件
    display = new JLabel("初始状态");
    this.add(display);

    input = new JTextField(10);
    this.add(input);

    echoButton = new JButton("Echo");
    echoButton.setActionCommand("Echo Button");
    this.add(echoButton);

    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    this.add(exitButton);

    // 布局完毕后打包
    this.pack();
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  @Override
  public String getInputString() {
    return input.getText();
  }

  @Override
  public void clearInputString() {
    input.setText("");
  }

  @Override
  public void setEchoOutput(String s) {
    display.setText(s);
  }

  @Override
  public void display() {
    this.setVisible(true);
  }

  @Override
  public void setListener(ActionListener listener) {
    // 把外部传进来的 ActionListener 添加到按钮上
    echoButton.addActionListener(listener);
    exitButton.addActionListener(listener);
  }

  /**
   * 允许外部注册键盘监听器
   * 通过 setFocusable(true) 和 requestFocus() 确保能捕获键盘事件
   */
  @Override
  public void addKeyListener(KeyListener kbd) {
    this.setFocusable(true);  // 允许当前组件获得键盘焦点
    this.requestFocus();      // 主动请求焦点
    super.addKeyListener(kbd);
  }
}

```



:::

### 3. 在 Controller 中实现 KeyListener

我们可以让 `Controller` 同时 `implements KeyListener`，或者写一个单独的类 `KeyboardHandler` 并在 Controller 中组合使用。下面是让 `Controller` 直接实现的例子。

在原有的 `Controller` 基础上，增加 `implements KeyListener`，并实现相关方法（`keyTyped`, `keyPressed`, `keyReleased`）。以一个简单示例为演示：

- 当用户敲击 `'d'` 键：切换文字颜色（这里仅在控制台打印提示，可自行改进到视图上）。
- 当用户按下 `'c'` 键：把 Model 中的字符串大写显示到 View。
- 当用户松开 `'c'` 键：恢复原有字符串。

::: code-tabs

@tab 简单

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Controller implements ActionListener, KeyListener {
  private final IModel model;
  private final IView view;
  private boolean colorRed = false; // 用于示例：是否已切换成红色

  public Controller(IModel m, IView v) {
    this.model = m;
    this.view = v;
    this.view.setListener(this);
    this.view.addKeyListener(this);
  }

  public void start() {
    view.display();
  }

  // 按钮事件
  @Override
  public void actionPerformed(ActionEvent e) {
    ...
  }

  // 键盘事件
  @Override
  public void keyTyped(KeyEvent e) {
    // 如果用户敲击 'd'，则切换颜色
    if (e.getKeyChar() == 'd') {
      // 这里仅做简单演示，可以让 view 提供 toggleColor() 等方法
      colorRed = !colorRed;
      if (colorRed) {
        // 比如让标签设置成红色文字（需在 View 中提供一个接口或直接拿到 JLabel）
        // 此处只是示例，不代表完整实现
        System.out.println("切换为红色文字！");
      } else {
        System.out.println("切换回黑色文字！");
      }
    }
  }

  @Override
  public void keyPressed(KeyEvent e) {
    // 如果按下 'c' 键，把 model 中的字符串转大写并显示
    if (e.getKeyCode() == KeyEvent.VK_C) {
      String text = model.getString();
      view.setEchoOutput(text.toUpperCase());
    }
  }

  @Override
  public void keyReleased(KeyEvent e) {
    // 如果松开 'c' 键，则恢复原有字符串
    if (e.getKeyCode() == KeyEvent.VK_C) {
      String text = model.getString();
      view.setEchoOutput(text);
    }
  }
}
```

@tab all-code

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

/**
 * GUI 控制器，负责响应按钮和键盘事件，并更新模型与视图。
 */
public class Controller implements ActionListener, KeyListener {
  private final IModel model;
  private final IView view;

  // 用于示例：文字是否切换为红色
  private boolean isRed = false;

  /**
   * 构造函数
   * @param m 模型
   * @param v 视图
   */
  public Controller(IModel m, IView v) {
    this.model = m;
    this.view = v;

    // 把自己注册为视图的按钮监听器
    this.view.setListener(this);

    // 把自己注册为视图的键盘监听器
    this.view.addKeyListener(this);
  }

  /**
   * 启动程序
   */
  public void start() {
    view.display();
  }

  /**
   * 按钮点击事件
   */
  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "Echo Button":
        // 读取视图的输入设置到模型，再让视图回显
        String input = view.getInputString();
        model.setString(input);
        view.setEchoOutput(model.getString());
        // 可自行决定要不要清空输入框
        view.clearInputString();
        break;

      case "Exit Button":
        System.exit(0);
        break;

      default:
        // do nothing
    }
  }

  /**
   * 键盘事件 - keyTyped
   * 当用户敲击某个键并释放（能输入字符的键），会触发 keyTyped
   */
  @Override
  public void keyTyped(KeyEvent e) {
    // 用户敲击 'd' 时，示例：切换文字颜色
    if (e.getKeyChar() == 'd') {
      isRed = !isRed;
      if (isRed) {
        System.out.println("切换为红色文字（示例，可改为真实 GUI 操作）");
      } else {
        System.out.println("切换回黑色文字（示例，可改为真实 GUI 操作）");
      }
    }
  }

  /**
   * 键盘事件 - keyPressed
   * 当用户按下某个键时触发
   */
  @Override
  public void keyPressed(KeyEvent e) {
    // 如果按下 'c' 键，把 model 中字符串转大写显示到 view
    if (e.getKeyCode() == KeyEvent.VK_C) {
      String text = model.getString();
      view.setEchoOutput(text.toUpperCase());
    }
  }

  /**
   * 键盘事件 - keyReleased
   * 当用户松开某个键时触发
   */
  @Override
  public void keyReleased(KeyEvent e) {
    // 如果松开 'c' 键，则恢复原有字符串
    if (e.getKeyCode() == KeyEvent.VK_C) {
      String text = model.getString();
      view.setEchoOutput(text);
    }
  }
}

```



:::

### 4. MainGUI

这样，当用户按 `d`、`c` 键时，就能触发特定逻辑。

```java
import controller.Controller;
import model.IModel;
import model.Model;
import view.IView;
import view.JFrameView;

public class MainGUI {
  public static void main(String[] args) {
    IModel model = new Model();                 // 创建模型
    IView view = new JFrameView("GUI with KeyListener"); // 创建视图
    Controller controller = new Controller(model, view); // 创建控制器
    controller.start();                         // 启动应用
  }
}

```



## Stage 8: 使用 Map 来映射更多键盘/按钮动作

若想灵活地让用户自定义热键，可以把键值和对应动作用 `Map`（或 `ActionMap`, `InputMap`）来维护。核心思想是：

1. **将原本 `switch`/`if` 里的逻辑转换为“数据”**（如 map，把 `KeyEvent` 或 `char` 映射到具体要执行的 `Runnable`）。
2. 这样能够在运行时根据配置文件或用户选项改变“按键 → 动作”的映射。

::: tabs

@tab 1. IModel.java

```java
/**
 * 模型接口，定义对字符串的基本操作
 */
public interface IModel {
  /**
   * 获取当前存储的字符串
   * @return 模型中的字符串
   */
  String getString();

  /**
   * 设置新的字符串
   * @param str 要设置的新字符串
   */
  void setString(String str);
}
```

@tab Model.java

```java
/**
 * IModel 的具体实现，内部用一个 String 来存储数据
 */
public class Model implements IModel {
  private String data;

  /**
   * 无参构造函数，初始化为空字符串
   */
  public Model() {
    this.data = "";
  }

  @Override
  public String getString() {
    return this.data;
  }

  @Override
  public void setString(String str) {
    this.data = str;
  }
}
```

@tab IView.java

这里的视图接口需要支持以下功能：

1. 获取文本框内容
2. 清空文本框
3. 设置并显示标签上的文本
4. 显示窗口
5. 设置按钮监听（ActionListener）
6. 注册键盘监听（KeyListener）

```java
import java.awt.event.ActionListener;
import java.awt.event.KeyListener;

/**
 * 视图接口，定义界面可提供的操作
 */
public interface IView {
  /**
   * @return 用户在文本框中输入的字符串
   */
  String getInputString();

  /**
   * 清空文本框
   */
  void clearInputString();

  /**
   * 设置界面上标签显示的内容
   * @param s 要显示的内容
   */
  void setEchoOutput(String s);

  /**
   * 显示整个窗口
   */
  void display();

  /**
   * 为按钮设置监听器（在 Controller 里实现处理逻辑）
   * @param listener 要注册的监听器
   */
  void setListener(ActionListener listener);

  /**
   * 在视图上注册键盘监听器
   * @param kbd 要注册的 KeyListener
   */
  void addKeyListener(KeyListener kbd);

  /**
   * 切换颜色（本示例仅演示，实际可用来改变文字/背景等）
   * 在配合键盘事件时用于演示颜色切换
   */
  void toggleColor();
}
```

@tab JFrameView.java

这是一个基于 Swing 的简单视图实现。支持两个按钮、一个文本框和一个标签，同时提供对键盘监听的支持，并在示例中提供了 `toggleColor` 方法用于演示颜色切换（把标签文字在红色和黑色之间切换）。

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.KeyListener;

/**
 * JFrame 视图的具体实现
 */
public class JFrameView extends JFrame implements IView {
  private final JLabel display;       // 用于显示文本
  private final JTextField input;     // 用户输入的文本框
  private final JButton echoButton;   // Echo 按钮
  private final JButton exitButton;   // Exit 按钮

  // 为了演示 toggleColor，记录当前是否为红色
  private boolean isRed = false;

  public JFrameView(String caption) {
    super(caption);
    this.setLayout(new FlowLayout());

    // 标签
    display = new JLabel("初始状态");
    this.add(display);

    // 文本输入框
    input = new JTextField(10);
    this.add(input);

    // Echo 按钮
    echoButton = new JButton("Echo");
    echoButton.setActionCommand("Echo Button");
    this.add(echoButton);

    // Exit 按钮
    exitButton = new JButton("Exit");
    exitButton.setActionCommand("Exit Button");
    this.add(exitButton);

    // 设置窗口大小、默认关闭操作等
    this.pack();
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  @Override
  public String getInputString() {
    return input.getText();
  }

  @Override
  public void clearInputString() {
    input.setText("");
  }

  @Override
  public void setEchoOutput(String s) {
    display.setText(s);
  }

  @Override
  public void display() {
    this.setVisible(true);
  }

  @Override
  public void setListener(ActionListener listener) {
    echoButton.addActionListener(listener);
    exitButton.addActionListener(listener);
  }

  @Override
  public void addKeyListener(KeyListener kbd) {
    // 必须先让当前组件可以聚焦并请求焦点，否则无法接收键盘事件
    this.setFocusable(true);
    this.requestFocus();
    super.addKeyListener(kbd);
  }

  @Override
  public void toggleColor() {
    if (isRed) {
      display.setForeground(Color.BLACK);
    } else {
      display.setForeground(Color.RED);
    }
    isRed = !isRed;
  }
}
```

@tab KeyboardHandler.java

通过 `Map` 将键盘事件与相应的逻辑（`Runnable`) 映射起来，避免在 `keyPressed / keyReleased / keyTyped` 中写大量 `if` / `switch` 语句。

```java
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.HashMap;
import java.util.Map;

/**
 * 一个通用的键盘监听器，可以通过 Map 配置各个按键对应的动作
 */
public class KeyboardHandler implements KeyListener {
  // keyTyped 用 char 做 key
  private Map<Character, Runnable> keyTypedMap = new HashMap<>();
  // keyPressed/keyReleased 用 int 做 key
  private Map<Integer, Runnable> keyPressedMap = new HashMap<>();
  private Map<Integer, Runnable> keyReleasedMap = new HashMap<>();

  public void setKeyTypedMap(Map<Character, Runnable> map) {
    this.keyTypedMap = map;
  }

  public void setKeyPressedMap(Map<Integer, Runnable> map) {
    this.keyPressedMap = map;
  }

  public void setKeyReleasedMap(Map<Integer, Runnable> map) {
    this.keyReleasedMap = map;
  }

  @Override
  public void keyTyped(KeyEvent e) {
    char c = e.getKeyChar();
    if (keyTypedMap.containsKey(c)) {
      keyTypedMap.get(c).run();
    }
  }

  @Override
  public void keyPressed(KeyEvent e) {
    int code = e.getKeyCode();
    if (keyPressedMap.containsKey(code)) {
      keyPressedMap.get(code).run();
    }
  }

  @Override
  public void keyReleased(KeyEvent e) {
    int code = e.getKeyCode();
    if (keyReleasedMap.containsKey(code)) {
      keyReleasedMap.get(code).run();
    }
  }
}
```

@tab Controller.java

1. 继承/实现 `ActionListener` 用于处理按钮点击事件。

2. 使用 `KeyboardHandler` 来管理键盘事件映射。

3. 将输入框内容设置到 `model` 或让 `view` 执行对应操作。

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.util.HashMap;
import java.util.Map;

/**
 * Controller 负责连接 Model 和 View，处理用户交互
 */
public class Controller implements ActionListener {
  private final IModel model;
  private final IView view;

  // 构造时注入 model 和 view
  public Controller(IModel model, IView view) {
    this.model = model;
    this.view = view;

    // 告诉 View：按钮事件交给当前 Controller 来处理
    this.view.setListener(this);

    // 配置键盘事件
    configureKeyboard();

    // 最后显示视图
    this.view.display();
  }

  /**
   * 为键盘事件配置对应的 Runnable 动作
   */
  private void configureKeyboard() {
    // 创建并配置 KeyboardHandler
    KeyboardHandler kbd = new KeyboardHandler();

    // 1) keyTyped 映射（char）
    Map<Character, Runnable> typedMap = new HashMap<>();
    // 当用户输入 'r' 字符时，切换颜色
    typedMap.put('r', () -> {
      view.toggleColor();
    });

    // 2) keyPressed 映射（int）
    Map<Integer, Runnable> pressedMap = new HashMap<>();
    // 当按下 C 时，将模型中的字符串转为大写显示
    pressedMap.put(KeyEvent.VK_C, () -> {
      String text = model.getString();
      view.setEchoOutput(text.toUpperCase());
    });

    // 3) keyReleased 映射（int）
    Map<Integer, Runnable> releasedMap = new HashMap<>();
    // 当松开 C 时，恢复原始大小写
    releasedMap.put(KeyEvent.VK_C, () -> {
      String text = model.getString();
      view.setEchoOutput(text);
    });

    // 将这三类映射传给 KeyboardHandler
    kbd.setKeyTypedMap(typedMap);
    kbd.setKeyPressedMap(pressedMap);
    kbd.setKeyReleasedMap(releasedMap);

    // 将这个 KeyboardHandler 注册到 view
    this.view.addKeyListener(kbd);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "Echo Button":
        // 将输入框内容写入 Model，并让 View 显示
        String input = view.getInputString();
        model.setString(input);
        view.setEchoOutput(model.getString());
        // 清空输入框
        view.clearInputString();
        break;
      case "Exit Button":
        System.exit(0);
        break;
      default:
        // 未识别的命令，不做处理
    }
  }
}
```

@tab MainStage8.java

最后是一个演示用的 `main` 函数，创建 `Model`, `View`, `Controller`，并运行程序。

```java
public class MainStage8 {
  public static void main(String[] args) {
    IModel model = new Model();
    IView view = new JFrameView("Stage 8 Demo (Keyboard Maps)");

    // 创建 Controller，即可自动配置好键盘、按钮等逻辑，并显示窗口
    new Controller(model, view);

    // 程序将保持运行，直到用户点击 "Exit" 按钮或手动关闭窗口
  }
}
```



:::















## Question 1

在这段代码中：

```java
public class JFrameView extends JFrame implements ActionListener {
  public JFrameView(String caption, IModel model) {
    super(caption);               // ①
    this.model = model;           // ②
    this.setLayout(new FlowLayout()); // ③
    ...
  }
}
```

- **`super(caption);`** 调用的是 **父类构造函数**。
- 这里的父类就是 **`javax.swing.JFrame`**。
- `JFrameView extends JFrame` 表示 `JFrameView` 继承了 `JFrame`，因此可以调用 `super(caption)` 来执行 `JFrame` 的构造方法（`JFrame(String title)`）。
- `this.setLayout(...)` 也是从父类（以及其父类链：`Container`）继承而来，`JFrame` 继承了 AWT/Swing 框架中一系列类（`Frame` → `Window` → `Container` → `Component` 等），所以能够直接调用 `setLayout(...)`。

### 继承关系示意

在 Java Swing 层次结构中，`JFrame` 继承自 `Frame`，然后一直往上可以追溯到 `Window`、`Container`、`Component` 等：

```java
Object
  └─ Component
       └─ Container
            └─ Window
                 └─ Frame
                      └─ JFrame
                           └─ JFrameView (我们自定义的类)
```

- **`JFrameView`** 是我们定义的类，继承自 **`JFrame`**；
- **`JFrame`** 在其构造方法中允许传入一个字符串（窗口标题 `caption`），也就是 `super(caption)` 调用的那个构造；
- **`setLayout(...)`** 是 `Container` 类提供的方法，`JFrame` 通过继承链将其暴露出来，因此在 `JFrameView` 里也能使用。

因此，这三行代码分别代表着：

1. `super(caption)`：调用父类 `JFrame` 的构造函数，给窗口设置标题。
2. `this.model = model`：将构造函数里传进来的 `model` 参数赋给当前对象的 `model` 字段。
3. `this.setLayout(new FlowLayout())`：对这个 `JFrame` 窗口使用 **流式布局（FlowLayout）**。该方法来自祖先类 `Container`。





::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

