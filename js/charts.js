var spec = {
    "width": 360,
    "height": 360,
    "mark": "bar",
    "data": { "url": "/rwa_data?_by=WardName&_c=WardName|count" },
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "encoding": {
        "x": {
            "field": "WardName",
            "type": "nominal",
            // "axis": { "title": "Ward Name" }
        },
        "y": {
            "field": "WardName|count",
            "type": "quantitative",
            // "axis": { "title": "Total Wards" }
        }
    },
}

function draw_chart(url, field_x, field_y, div) {
    // x is the number parameter (quantitative)
    // y is the named parameter (nominal)
    spec.data.url = url
    if (field_x)
        spec.encoding.x.field = field_x

    if (field_x)
        spec.encoding.y.field = field_y
    // spec.encoding.y.field = y_field
    // spec.encoding.x.field = x_field
    var chart = new vega.View(vega.parse(vl.compile(spec).spec))
        .renderer('svg')
        .initialize('#'+div)
        // .hover()
        .run()

    return chart
}