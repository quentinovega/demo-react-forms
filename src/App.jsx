import {Form} from '@maif/react-forms'

import {schema} from './dtc/schema'

import '@maif/react-forms/lib/index.css';


export const App = () => {
  return (
    <div className="App">
      <div style={{ margin: '25px'}}>
        <Form
          schema={schema}
          onSubmit={data => alert(JSON.stringify(data, null, 4))}
        />
      </div>
    </div>
  )
}
