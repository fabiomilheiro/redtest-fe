Use this component in order to place a percentage field in the form.

The percentage validator is already included, so you don't need to pass it.

```jsx
import { Form } from "react-final-form";
import required from "../../validators/required";
<Form
  onSubmit={(values) => {}}
  validate={() => {}}
  render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <PercentageField
        name="SomeName"
        label="Some name"
        validators={[required]}
      />
    </form>
  )}
/>;
```
