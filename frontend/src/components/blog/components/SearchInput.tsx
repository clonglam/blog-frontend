import React from "react"
import { MdSearch } from "react-icons/md"

const SearchInput = () => {
    return (
        <form className="search-bar-container">
            <div className="search-bar-input">
                <input className="search-input"></input>
                <button className="search-button">
                    <MdSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchInput
