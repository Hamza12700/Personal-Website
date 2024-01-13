package main

import (
	"io"
	"net/http"
	"os"
	"os/exec"
	"text/template"

	"github.com/labstack/echo/v4"
)

type TemplateRegistry struct {
	tamplates *template.Template
}

func (t *TemplateRegistry) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.tamplates.ExecuteTemplate(w, name, data)
}

func indexPage(c echo.Context) error {
	return c.Render(http.StatusOK, "layout.html", nil)
}

func main() {
	build()

	e := echo.New()

	e.Renderer = &TemplateRegistry{
		tamplates: template.Must(template.ParseGlob("templates/*.html")),
	}

	e.Static("/static", "static")

	e.GET("/", indexPage)

	e.Logger.Fatal(e.Start(":1212"))
}

func build() {
	if len(os.Args) != 2 {
		return
	}
	arg := os.Args[1]
	
	if arg == "prod" {

		tailwind_Minified := exec.Command("tailwind -o static/output.css --minify")
		tailwind_Minified.Stderr = os.Stderr

		templ := template.Must(template.ParseGlob("templates/*.html"))

		tailwind_Minified.Run()

		outputHTML, _ := os.Create("dist/index.html")
		defer outputHTML.Close()

		templ.ExecuteTemplate(outputHTML, "layout.html", nil)
	}

	os.Exit(0)
}
