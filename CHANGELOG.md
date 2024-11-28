# Changelog
## 0.7.0 - 2024-11-28
- Highlight `static`
- Switch license back to MIT


## 0.6.1 - 2024-10-27
- Fix highlighting of compile time if/else


## 0.6.0
_2024-01-16_

- Add icon


## 0.5.0
_2024-01-14_

**Engineering**
- Move to `bait-lang` organization
- Switch from `npm` to `pnpm`


## 0.4.0
_07 September 2023_

**Additions and Changes**
- Highlight `void` and `interface`
- Highlight generic function declarations
- Support highlighting mutable method receivers
- Add tokenization for attributes
- Switch License from MIT to MPL-2.0

**Fixes**
- Do not highlight `'\${}'` as string interpolation
- Remove multiline comments highlighting as they are not implemented in Bait


## 0.3.0
_28 April 2023_vba

**Changes**
- Highlight `global`, `is`, `map`, `pub` and `typeof` keywords
- Highlight `fun` in type alias definitions
- Remove highlighting for `void`

## 0.2.4
_19 December 2022_

**Breaking**
- Require VS Code >= 1.74.0

**Additions**
- Highlight `mut`, `as` and `in`
- Highlight interpolated strings
- Fixes for escaped characters in strings and char literals

## 0.2.3
_14 November 2022_

**Additions:**
- highlight double quoted strings

**Fixes**
- do not highlight `fun` in `func`
- add support for escaped quotes in strings
- update readme badges

## 0.2.2
_26 April 2022_

**Additions:**
- highlight keywords: `type`, `enum`, `match`
- support for block comments

## 0.2.1
_19 April 2022_

**Additions:**
- highlight keywords: `break`, `continue`, `not`
- highlight types: `u8`, `u16`, `u32`, `u64`, `f32`, `f64`

**Changes:**
- change scope for `and` and `or` to `keyword.control`
- remove highlighting for `byte` as it is no type anymore

## 0.2.0
_11 April 2022_

**Additions**
- syntax: highlight function names, numbers, variable names and method receiver types
- syntax: highlight keyword `return`

**Engineering:**
- use yaml in language grammar and configuration
- use yaml in eslintrc
- only package necessary files
- minify packaged json

## 0.1.0
_11 April 2022_

**Additions:**
- syntax highlighting for keywords and types
- specify line comment marker
- specify token pairs

## 0.0.1
_10 April 2022_

- initial release
