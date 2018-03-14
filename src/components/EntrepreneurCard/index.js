import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs } from '../../actions'

import './EntrepreneurCard.css'

class EntrepreneurCard extends Component {
    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    render() {
        console.log('renderrrrrr', this.props)
        return (
            <section>
                {this.props.entrepreneurs.map(entrepreneur => (
                    <div className="entrepreneur-card">
                        <h3 className="user">{entrepreneur.id}</h3>
                        <ul className="card-links">
                            <li className="card-links__edit">Editar</li>
                            <li className="card-links__remove">Remover</li>
                        </ul>
                    </div>
                ))}
            </section>
        )

    }
}

const mapStateToProps = state => ({
    entrepreneurs: state.entrepreneursReducer.entrepreneurs
})

const mapDispatchToProps = dispatch => ({
    dispatchListEntrepreneur: () => {
        dispatch(listEntrepreneurs())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurCard)