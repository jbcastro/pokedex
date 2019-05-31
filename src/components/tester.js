{
    if (this.state.pokemon === "unselected") {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <Unselectedview pokemon={this.state.pokemon} />
          <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        </div>
      );
    } else if (this.state.isShiny === false) {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
          <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <ShinyView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
          <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        </div>
      );
    }
  return(
      <div className="App">
          {this.state.pokemon ==="unselected"?
          <PokeList handleOnClick={this.handleOnClick} />
          <Unselectedview pokemon={this.state.pokemon} />
          <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        }
        {this.state.isShiny === false?
            <PokeList handleOnClick={this.handleOnClick} />
            <DetailView
              pokemon={this.state.pokemon}
              handleTypeClick={this.handleTypeClick}
              handleShinyClick={this.handleShinyClick}
            />
            <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        }

        {
            <PokeList handleOnClick={this.handleOnClick} />
            <ShinyView
              pokemon={this.state.pokemon}
              handleTypeClick={this.handleTypeClick}
              handleShinyClick={this.handleShinyClick}
            />
            <DropDown handleSelect={this.handleSelect} type={this.state.type} />
        }

      </div>
  )



  <div className="App">
  {unselected ? (
  <PokeList handleOnClick={this.handleOnClick} />
  <Unselectedview pokemon={this.state.pokemon} />
  <DropDown handleSelect={this.handleSelect} type={this.state.type} />
  ):(
    <PokeList handleOnClick={this.handleOnClick} />
  <ShinyView
    pokemon={this.state.pokemon}
    handleTypeClick={this.handleTypeClick}
    handleShinyClick={this.handleShinyClick}
  />
  <DropDown handleSelect={this.handleSelect} type={this.state.type} />
  )}
{isShiny?
    <PokeList handleOnClick={this.handleOnClick} />
    <DetailView
      pokemon={this.state.pokemon}
      handleTypeClick={this.handleTypeClick}
      handleShinyClick={this.handleShinyClick}
    />
    <DropDown handleSelect={this.handleSelect} type={this.state.type} />
}

{
    <PokeList handleOnClick={this.handleOnClick} />
    <ShinyView
      pokemon={this.state.pokemon}
      handleTypeClick={this.handleTypeClick}
      handleShinyClick={this.handleShinyClick}
    />
    <DropDown handleSelect={this.handleSelect} type={this.state.type} />
}

</div>