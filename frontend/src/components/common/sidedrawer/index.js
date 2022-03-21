import React, { Component } from 'react'

export default class SideDrawer extends Component {
    render() {
        let drawer = 'menu'
        if (this.props.open) {
            drawer = 'menu open'
        }
        return (
            <div>
                <div className={drawer} >
                    <ul>
                        <li>Products</li>
                        <li>Fax</li>
                    </ul>
                </div>
            </div >
        )
    }
}
