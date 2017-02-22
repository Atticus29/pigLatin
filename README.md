
# A bash script tool to help streamline creation of new websites for Epicodus

#### 22 Feb., 2017, v.1.0.1

#### By Mark Fisher

## Description

Website that translates a string submitted by the user into piglatin and displays it.

### Specifications

* The program should add "ay" at the end of a word beginning with a vowel.
  * **Input Example**: "I"
  * **Output Example**: "Iay"

* The program should move an initial consonant to the end of the word and then add "ay" to the end fo the word.
  * **Input Example**: "pig"
  * **Output Example**: "igpay"

* The program should move an initial, _capitalized_ consonant to the end of the word and then add "ay" to the end fo the word.
  * **Input Example**: "Pig"
  * **Output Example**: "igPay"

* The program should move all consecutive consonants to the end of the word and then add "ay" to the end fo the word.
  * **Input Example**: "Trick"
  * **Output Example**: "ickTray"

* The program should move all consecutive consonants AND "u"s that follow "q"s that fall into an initial cluster of consonants to the end of the word and then add "ay" to the end fo the word.
  * **Input Example**: "squeal"
  * **Output Example**: "ealsquay"
  * **Input Example**: "Queen"
  * **Output Example**: "eenQuay"

## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/pigLatin).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/pigLatin.git`
* Download
  * Click [here](https://github.com/Atticus29/pigLatin/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the pigLatin folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* bash
* git v. 2.11.1

### Template
* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
