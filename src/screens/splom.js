import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';
import Papa from "papaparse";
import { getSplomData } from '../service/service';
import Loader from "react-loader-spinner";


export default function Splom() {
    const [data, setData] = useState([])
    const axis = () => ({
        showline: false,
        zeroline: false,
        gridcolor: '#ffff',
        ticklen: 4
    })
    const layout = {
        title: 'Iris Data set',
        height: 800,
        width: 800,
        autosize: false,
        hovermode: 'closest',
        dragmode: 'select',
        plot_bgcolor: 'rgba(240,240,240, 0.95)',
        xaxis: axis(),
        yaxis: axis(),
        xaxis2: axis(),
        xaxis3: axis(),
        xaxis4: axis(),
        yaxis2: axis(),
        yaxis3: axis(),
        yaxis4: axis()
    }

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key.replace('.', ' ')]; });
    }
    async function callfordata() {

        let response = await getSplomData();
        response = "https://raw.githubusercontent.com/plotly/datasets/master/iris-data.csv"
        Papa.parse(response, {
            download: true,
            header: true,
            complete: function (results) {

                let colors = []
                for (let i = 0; i < unpack(results.data, 'class').length; i++) {
                    if (unpack(results.data, 'class')[i] === "Iris-setosa") {
                        colors.push(0)
                    } else if (unpack(results.data, 'class')[i] === "Iris-versicolor") {
                        colors.push(0.5)
                    } else if (unpack(results.data, 'class')[i] === "Iris-virginica") {
                        colors.push(1)
                    }
                }

                let pl_colorscale = [
                    [0.0, '#19d3f3'],
                    [0.333, '#19d3f3'],
                    [0.333, '#e763fa'],
                    [0.666, '#e763fa'],
                    [0.666, '#636efa'],
                    [1, '#636efa']
                ]


                let data = [{
                    type: 'splom',
                    dimensions: [
                        { label: 'sepal length', values: unpack(results.data, 'sepal length') },
                        { label: 'sepal width', values: unpack(results.data, 'sepal width') },
                        { label: 'petal length', values: unpack(results.data, 'petal length') },
                        { label: 'petal width', values: unpack(results.data, 'petal width') }
                    ],
                    text: unpack(results.data, 'class'),
                    marker: {
                        color: colors,
                        colorscale: pl_colorscale,
                        size: 7,
                        line: {
                            color: 'white',
                            width: 0.5
                        }
                    }
                }]
                setData(data)

            }
        });
    }
    useEffect(() => {
        callfordata()
    })

    return (
        <div style={{ backgroundColor: "rebeccapurple", display: 'flex', height: "100vh", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            {data.length ? <Plot
                data={data}
                layout={layout}
            /> : <Loader type="Circles" color="#00BFFF" height={80} width={80} />}
        </div>
    )
}
