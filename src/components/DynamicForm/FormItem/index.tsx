import React, { useState, FC } from 'react'
import { returnForm } from './functions'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useTheme } from 'providers'
import { InputProps, ItemProps } from './interface'

const Input: FC<InputProps> = ({
  element,
  mainRender,
  values,
  onChange,
  multiple
}: any) => {
  const [value, setValue] = useState('')

  const onChangeInput = (val: any) => {
    setValue(val.nativeEvent.text)
    onChange(val.nativeEvent.text)
  }

  const onChangeSelect = (val: any) => {
    setValue(val)
    onChange(val)
  }

  values.style = multiple ? { ...values.style, width: `100%`} : values.style

  return element === 'select'
    ? React.createElement(
      mainRender,
      { ...values, selectedValue: value, onValueChange: onChangeSelect },
      values.values.map((option: any, index: any) =>
        React.createElement(mainRender?.Item, {
          ...option,
          ...{ key: index },
        }),
      ),
    )
    : React.createElement(mainRender, {
      ...values,
      value: value,
      onChange: onChangeInput,
    })
}

const FormItem: FC<ItemProps> = ({
  data,
  values,
  returnData,
  setData,
  form,
}: any) => {
  const { colors } = useTheme()
  const [validate, setValidate] = useState(false)
  const {
    element,
    element_array,
    render: mainRender,
    label: mainLabel,
  } = values

  const onChange = (val: any) =>
    returnData(returnForm(val, form, values.name, data, setData, setValidate))

  values.placeholderTextColor = values.placeholderTextColor
    ? values.placeholderTextColor
    : 'white'

  values.style = values.style
    ? { ...styles.input, ...values.style }
    : styles.input
  values.style.color = !validate ? styles.error.color : styles.input.color
  const Label = mainLabel ? <Text>{mainLabel}</Text> : null

  return (
    <>
      {element === 'multiple' ? (
        <View style={styles.multipleContent}>
          {element_array.map((item: any, index: any) => {
            const { element: elements, label, render } = item
            const onChangeMultiple = (val: any) =>
              returnData(
                returnForm(
                  val,
                  form,
                  item.name,
                  data,
                  setData,
                  setValidate,
                ),
              )

            return (
              <View key={index} style={[styles.root, { borderBottomColor: colors.primary, width: `${100 / element_array.length}%` }]}>
                {label ? <Text>{label}</Text> : null}
                <Input
                  element={elements}
                  mainRender={render}
                  values={item}
                  onChange={onChangeMultiple}
                  multiple={true}
                />
              </View>
            )
          })}
        </View>
      ) : (
        <View>
          {Label}
          <View style={[styles.root, { borderBottomColor: colors.primary }]}>
            <Input
              element={element}
              mainRender={mainRender}
              values={values}
              onChange={onChange}
            />
          </View>
        </View>
      )}
    </>
  )
}

export default FormItem
