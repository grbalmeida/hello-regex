package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	text := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	nine, _ := regexp.Compile("9")
	fmt.Println(nine.MatchString(text))
	fmt.Println(nine.FindString(text))
	fmt.Println(nine.FindStringIndex(text))

	letters, _ := regexp.Compile("[a-f]")
	fmt.Println(letters.FindAllString(text, 20))
	fmt.Println(letters.ReplaceAllString(text, "Achei"))

	result := letters.ReplaceAllFunc([]byte(text), bytes.ToUpper)
	fmt.Println(string(result))
}
