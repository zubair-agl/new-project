import React, { useState } from 'react'
import { Formik } from 'formik'
import LoginInput from '../atoms/LoginInput'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import ThemeButton from '../atoms/ThemeButton'
import { size, type, weight } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import { loginValidationSchema } from '../../util/validations'
import { useSelector } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';

const LoginForm = (props) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true); // password visibility state
    const [toggleCheckBox, setToggleCheckBox] = useState(false) // checkbox state
    const state = useSelector((state) => state.authReducer)


    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => props.onSubmit(values)}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched
            }) => (
                <>
                    <Text style={styles.labelStyle}>Email</Text>
                    <LoginInput
                        placeholder={'example@adglobal360.com'}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    {(errors.email && touched.email) &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                    }
                    <Text style={styles.labelStyle}>Password</Text>
                    <LoginInput
                        placeholder={'Enter Your Password'}
                        password={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={secureTextEntry}
                        onPress={() => {
                            setSecureTextEntry(!secureTextEntry)
                        }}

                    />
                    {(errors.password && touched.password) &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                    }
                    <View style={styles.checkBox}>
                        <CheckBox
                            tintColors={colors.black}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.checkBoxText}> Remember me</Text>
                    </View>

                    {
                        state.isLoading ? <ActivityIndicator size={'small'} />
                            :
                            <ThemeButton
                                title={'Login'}
                                onPress={() => {
                                    handleSubmit()
                                }}
                            />
                    }
                </>
            )}
        </Formik>
    )

}

const styles = StyleSheet.create({
    labelStyle: {
        fontWeight: weight.low,
        fontSize: size.font14,
        lineHeight: 16.94,
        color: colors.black,
        opacity: 0.85,
        fontFamily: type.regular,
        padding: 10
    },
    checkBoxText: {
        fontWeight: weight.semi,
        fontSize: size.font15,
        color: 'rgba(0, 12, 20, 1)'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '20%'
    }
})

export default LoginForm