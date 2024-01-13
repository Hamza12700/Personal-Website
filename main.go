package main

import (
	"io"
	"net/http"
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
	e := echo.New()

	e.Renderer = &TemplateRegistry{
		tamplates: template.Must(template.ParseGlob("templates/*.html")),
	}

	e.Static("/public", "static")

	e.GET("/", indexPage)

	e.Logger.Fatal(e.Start(":1111"))
}
