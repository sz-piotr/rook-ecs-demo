import React from 'react'
import { InspectInfo } from 'src/game/InspectInfo'

export interface InspectorProps {
  value: InspectInfo[]
}

export function Inspector({ value }: InspectorProps) {
  return (
    <div className="inspector">
      <p className="inspector-title">Inspector</p>
      <ul className="components">
        {value.map(item => (
          <li className="component" key={item.name}>
            <p className="component-name">{item.name}</p>
            <ul className="component-props">
              {item.props.map(({ key, value }) => (
                <li className="component-prop" key={key}>
                  <p className="component-prop-key">{key}</p>
                  <p className="component-prop-value">{value}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
