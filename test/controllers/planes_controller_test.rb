require 'test_helper'

class PlanesControllerTest < ActionController::TestCase
  setup do
    @plane = planes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:planes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create plane" do
    assert_difference('Plane.count') do
      post :create, plane: { columns: @plane.columns, model: @plane.model, rows: @plane.rows }
    end

    assert_redirected_to plane_path(assigns(:plane))
  end

  test "should show plane" do
    get :show, id: @plane
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @plane
    assert_response :success
  end

  test "should update plane" do
    patch :update, id: @plane, plane: { columns: @plane.columns, model: @plane.model, rows: @plane.rows }
    assert_redirected_to plane_path(assigns(:plane))
  end

  test "should destroy plane" do
    assert_difference('Plane.count', -1) do
      delete :destroy, id: @plane
    end

    assert_redirected_to planes_path
  end
end
