export function required(value){
    if(!value || value.trim() == ""){
        return "This field is required.";
    }
    return "";
}

export function isEmail(value){
     if(!value){
        return "Email is required.";
     }

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(!emailPattern.test(value)){
        return "Please enter a valid email.";
     }

     return "";
}


export function isPhone(value){
    if(!value){
        return "Phone number is required.";
    }

    const phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(value)){
        return "Phone number must contain 10 digits."
    }

    return "";
}

export function minLength(value,length){
    if(!value) {
        return "This field is required."
    }

    if(value.length < length) return `Must be at least ${length} characters.`;

    return "";
}

export function passwordStrength(value){
    if(!value) return "Password is required."

    if(value.length < 8) return "Password must contain at least 8 characters.";

    if(!/[A-Z]/.test(value)) return "Password must contain an uppercase letter.";

    if(!/[0-9]/.test(value)) return "Password must contain a number.";

    return "";
}


// Compose multiple validators.

// The first error is returned.

export function compose(...validators){
    return (value) => {
        for(const validator of validators){
            const error = validator(value);

            if(error) return error;
        }
        return "";
    };
}

// Form validation schema
const validationSchema = {
    name: compose(required),

    email: compose(required,isEmail),

    phone: compose(required, isPhone),

    password: compose(required, (value) => minLength(value,8), passwordStrength),

    city: compose(required),
};


// Validate the complete form.
export default function validateForm(values){
    const errors = {};

    for(const field in validationSchema){
        const error = validationSchema[field](values[field]);

        if(error){
            errors[field] = error;
        }
    }
    if(!values.terms){
        errors.terms = "You must accept the terms and conditions.";
    }

    return errors;
}