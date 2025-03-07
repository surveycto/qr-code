# QR Code

![Default appearance for the 'baseline-text' field plug-in](extras/preview.png)

## Description

A field plug-in for encoding data as a scannable QR code. This field plug-in can be used to share a link from SurveyCTO Collect with anyone with a camera phone or to encode and transfer data to open forms in SurveyCTO Collect on other devices using the [*barcode* field type](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03k.field-types-barcode.html). This field plug-in works with the [*text*](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03a.field-types-text.html) field type.

[![Download now](extras/download-button.png)](https://github.com/surveycto/qr-code/raw/master/baseline-text.fieldplugin.zip)

### Features

This field plug-in has the following features:

1. **Encode data as a QR code**  
   Supply either a static or dynamic value as the code to display as a QR code.  
2. **Display an error if not configured correctly**  
   If no value is supplied, a helpful error is shown, alerting the form tester that the field plug-in has not been correctly configured.

### Data format

Not applicable. This field plug-in does not collect data.

**Warning:** For this reason, never make a *text* field with this field plug-in applied *required* in a form design.

## How to use

### Getting started

*To use this field plug-in as is:*

1. Download the [sample form]( https://github.com/surveycto/qr-code/raw/refs/heads/main/extras/Sample%20form%20-%20QR%20code%20field%20plug-in.xlsx) from this repository.
2. Download the [qr-code.fieldplugin.zip](https://github.com/surveycto/qr-code/raw/refs/heads/main/qr-code.fieldplugin.zip) file from this repository.
3. Deploy the sample form with the field plug-in as an optional media attachment.

### Parameters

| Name   | Description |
|--------|-------------|
| `code` | The value to be encoded as a QR code. You can specify a static value or use a field value reference (e.g., `${respondent_data}`) to supply a dynamic value. An error message will be displayed if no `code` value is supplied. |

### Default SurveyCTO feature support

| Feature / Property          | Support |
|-----------------------------|---------|
| Supported field type(s)      | `text`  |
| Default values               | No      |
| Constraint message           | NA      |
| Required message             | NA      |
| Read-only                    | NA      |
| media:image                  | No      |
| media:audio                  | No      |
| media:video                  | No      |
| `numbers` appearance         | NA      |
| `numbers_decimal` appearance | NA      |
| `numbers_phone` appearance   | NA      |

## More resources

* **Developer documentation**  
  Instructions and resources for developing your own field plug-ins.  
  [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)

* **User documentation**  
  How to get started using field plug-ins in your SurveyCTO form.  
  [https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html](https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
