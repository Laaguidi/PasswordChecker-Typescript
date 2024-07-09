# For educational purposes.

import re

def check_password_strength(password: str) -> str:
    """Check the strength of a given password."""
    has_upper_case = re.search(r'[A-Z]', password) is not None
    has_lower_case = re.search(r'[a-z]', password) is not None
    has_numbers = re.search(r'\d', password) is not None
    has_special_chars = re.search(r'[!@#$%^&*(),.?":{}|<>]', password) is not None
    length_valid = len(password) >= 8

    if length_valid and has_upper_case and has_lower_case and has_numbers and has_special_chars:
        return 'Very Strong'
    elif length_valid and has_upper_case and has_lower_case and (has_numbers or has_special_chars):
        return 'Strong'
    elif length_valid and (has_upper_case or has_lower_case) and (has_numbers or has_special_chars):
        return 'Moderate'
    else:
        return 'Weak'

if __name__ == "__main__":
    password = input("Enter a password to check its strength: ")
    strength = check_password_strength(password)
    print(f"Strength: {strength}")